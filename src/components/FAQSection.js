import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/database';


function FAQSection() {
    const [text, setText] = useState("")
    const [userId, setUserId] = useState("")
    const [localMessages, setLocalMessages] = useState([])
    const [localImage, setLocalImage] = useState(null)
    const adminList = ["DMZByKSOYJh1c9fVvAmUnAnjWAm2"]

    const firestore = firebase.firestore()
    const storage = firebase.storage()
    useEffect(() => {
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
        <div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <div style={{ flex: 1, marginLeft: 0, marginRight: 0, overflow: 'auto', marginBottom: 24 }}>
                    {localMessages.map((localMessage) => (
                        <div style={{ display: 'flex', flex: 1, justifyContent: localMessage.like === true ? 'flex-end' : 'flex-start' }}>
                            {(localMessage.like === true) &&
                                <div style={{
                                    minHeight: 52,
                                    width: 600,
                                    backgroundColor: '#007bff',
                                    marginTop: 24,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    borderRadius: 12
                                }}>
                                    <p>{(localMessage.content)}</p>
                                    {localMessage?.image && localMessage.image.length > 0 &&
                                        <img style={{ width: '100%', height: 'auto', marginBottom: 24 }} src={localMessage.image} alt="" />}
                                </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQSection;