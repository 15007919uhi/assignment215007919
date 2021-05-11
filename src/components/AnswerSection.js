import React, { useEffect, useState } from 'react'
import { firestore } from '../services/firebase'
import firebase from "firebase/app";
import "firebase/auth";

function AnswerSection() {
    const [title1, setTitle1] = useState("")
    const [title2, setTitle2] = useState("")
    const [title3, setTitle3] = useState("")
    const [title4, setTitle4] = useState("")
    const [userId, setUserId] = useState("")
    const answerId = "balances" //Should probably be done through URL and routing with useParams()
    const [localAnswers, setLocalAnswers] = useState([])

    useEffect(async () => {
        const snapshot = await firestore.collection("Answers").doc(answerId).get()
        const answerData = snapshot.data()
        const answerDetails = answerData[answerId]
        setTitle1(answerDetails[answerId].answer.ans1.title)
        setTitle2(answerDetails[answerId].answer.ans2.title)
        setTitle3(answerDetails[answerId].answer.ans3.title)
        setTitle4(answerDetails[answerId].answer.ans4.title)
        setUserId(firebase.auth()?.currentUser?.uid)
        var query = firestore.collection('Answers');
        query.onSnapshot({
            next: (querySnapshot) => {
                let answers = []
                setLocalAnswers(answers)
            },
        });
    }, [])

    return (
        <div className="col-12">
            <h3 className="text-center">Answers</h3>
            <div className="p-3 mb-2 bg-light">
                <form>
                    <div className="row">
                        <div className="col-sm d-grid gap-2">
                            <button type="button" id="ans1" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    ans1: firebase.firestore.FieldValue.arrayUnion(userId)
                                })
                            }}>{title1}</button>
                            <button type="button" id="ans2" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    ans2: firebase.firestore.FieldValue.arrayUnion(userId)
                                })
                            }}>{title2}</button>
                        </div>
                        <div className="col-sm d-grid gap-2">
                            <button type="button" id="ans3" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    ans3: firebase.firestore.FieldValue.arrayUnion(userId)
                                })
                            }}>{title3}</button>
                            <button type="button" id="ans4" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    ans4: firebase.firestore.FieldValue.arrayUnion(userId)
                                })
                            }}>{title4}</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <button type="submit" className="btn btn-primary p-4">Check my answer</button>
                            <button type="button" className="btn btn-primary float-end"><i className="bi bi-percent"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AnswerSection;