import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/database';
import FAQSection from './FAQSection';

function Video() {
    const [text, setText] = useState("")
    const [userId, setUserId] = useState("")
    const [localMessages, setLocalMessages] = useState([])

    const firestore = firebase.firestore()
    useEffect( () => {
        setUserId(firebase.auth()?.currentUser?.uid)
        var query = firestore.collection('Chats').orderBy("timestamp", "asc");
        query.onSnapshot({
            next: (querySnapshot) => {
                let messages = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data());
                    messages.push({ mid: doc.id, ...doc.data() })
                });
                setLocalMessages(messages)
            },
        });

    if (firebase.auth().currentUser?.uid) {
        const users = firebase.database().ref("users");
        users.once('value')
            .then(async (snapshot) => {
                const usersData = snapshot.val();
                const usersIds = usersData ? Object.keys(usersData) : [];
                if (!usersIds.includes(firebase.auth().currentUser?.uid)) {
                    await firebase.database().ref("users/" + firebase.auth.currentUser?.uid).set({
                        online: true
                    });
                } else {
                    await firebase.database().ref(`users/${firebase.auth().currentUser.uid}/online`).set(true)
                }
            })

            //This turns off the online status
            firebase.database().ref(`users/${firebase.auth().currentUser.uid}/online`).onDisconnect().set(false);
    }
    }, [firestore]);

    return (
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close float-end" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-3 bg-light">
                        <h4 className="text-center">FAQs</h4>
                <FAQSection />
                </div>

                <div class="col-8">
                <img style={{ width: '100%', height: 'auto', marginBottom: 24 }} className="mb-4 rounded mx-auto d-block" src="https://firebasestorage.googleapis.com/v0/b/assignment215007919.appspot.com/o/balances2.jpg?alt=media&token=740b8178-2915-48c7-b734-c002cd95ba3f" alt="" />
                <button type="button" className="btn btn-danger float-end hide" data-toggle="collapse" data-target="#confused" aria-pressed="false">Confused</button>
                <div id="confused" className="collapse">
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        const timestamp = Date.now();
                        const content = text;
                        const uid = userId;
                        {
                            const message = { content, timestamp, uid }
                            const docRef = await firestore.collection("Chats").add(message)
                        }

                        setText("")
                    }}>
                        <div className="form">
                            <label>What have you found confusing about this video?</label>
                            <input type="text" className="form-control" id="inputText" placeholder="your message goes here" value={text} onChange={(value) => {
                            setText(value.target.value)
                        }} />
                            <button className="btn btn-primary mt-1 mr-1" type="submit">Send</button>
                            <button type="button" class="btn btn-outline-primary mt-1 mx-1" data-toggle="collapse" data-target="#confused" aria-pressed="false">Cancel</button>
                        </div>
                    </form>
                </div>
                <p>Slide: <span className="text-primary">1 2 3</span> ( <span className="text-primary">prev</span> | <span className="text-primary">replay</span> | <span className="text-primary">next</span> | <span className="text-primary">-5s</span> | <span className="text-primary">+5s</span> )</p>
                <p>Question: <span className="text-primary">1</span> ( <span className="text-primary">prev</span> | <span className="text-primary">replay</span>  | <span className="text-primary">next</span> )</p>
            </div>
            </div>
            </div>
        </div>


    )
}

export default Video;