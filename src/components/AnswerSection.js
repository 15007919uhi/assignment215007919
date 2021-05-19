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
    const [ans1, setAns1] = useState("")
    const [ans2, setAns2] = useState("")
    const [ans3, setAns3] = useState("")
    const [ans4, setAns4] = useState("")
    const [hint1, setHint1] = useState("")
    const [hint2, setHint2] = useState("")
    const [hint3, setHint3] = useState("")
    const [hint4, setHint4] = useState("")
    const answerId = "balances"
    //Sets visibility of hint badges, code modified from https://forum.freecodecamp.org/t/passing-state-from-a-toggle-button-to-hide-a-div/338833
    const [isVisible, setIsVisible] = useState(false);

    useEffect(async () => {
        const snapshot = await firestore.collection("Answers").doc(answerId).get()
        const answerData = snapshot.data()
        const answerDetails = answerData[answerId]
        setUserId(firebase.auth()?.currentUser?.uid)

        //Gets answer text
        setTitle1(answerDetails[answerId].answer.ans1.title)
        setTitle2(answerDetails[answerId].answer.ans2.title)
        setTitle3(answerDetails[answerId].answer.ans3.title)
        setTitle4(answerDetails[answerId].answer.ans4.title)

        //Gets number of users who clicked each answer
        setAns1(answerData.users1)
        setAns2(answerData.users2)
        setAns3(answerData.users3)
        setAns4(answerData.users4)

        // Adds totals and calculates percentages
        const total = await (ans1 + ans2 + ans3 + ans4);
        if ((total) && !isNaN(total)) {
            const per1 = (ans1 / total * 100).toFixed(0) + '%'
            const per2 = (ans2 / total * 100).toFixed(0) + '%'
            const per3 = (ans3 / total * 100).toFixed(0) + '%'
            const per4 = (ans4 / total * 100).toFixed(0) + '%'
            console.log(per1, per2, per3, per4)
            setHint1(per1)
            setHint2(per2)
            setHint3(per3)
            setHint4(per4)
        }
    }, [ans1, ans2, ans3, ans4])

    return (
        <div className="col-12">
            <h3 className="text-center">Answers</h3>
            <div className="p-3 mb-2 bg-light">
                <form>
                    <div className="row">
                        <div className="col-sm d-grid gap-2">
                            <button type="button" id="ans1" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    users1: firebase.firestore.FieldValue.increment(1)
                                })
                            }}><h5>{title1} {isVisible && <span className="badge bg-dark" id="hint">{hint1}</span>}</h5>
                            </button>
                            <button type="button" id="ans2" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    users2: firebase.firestore.FieldValue.increment(1)
                                })
                            }}><h5>{title2} {isVisible && <span className="badge bg-dark" id="hint">{hint2}</span>}</h5>
                            </button>
                        </div>
                        <div className="col-sm d-grid gap-2">
                            <button type="button" id="ans3" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    users3: firebase.firestore.FieldValue.increment(1)
                                })
                            }}><h5>{title3} {isVisible && <span className="badge bg-dark" id="hint">{hint3}</span>}</h5>
                            </button>
                            <button type="button" id="ans4" className="btn btn-secondary mb-2 p-4" onClick={async () => {
                                await firestore.collection("Answers").doc(answerId).update({
                                    users4: firebase.firestore.FieldValue.increment(1)
                                })
                            }}><h5>{title4} {isVisible && <span className="badge bg-dark" id="hint">{hint4}</span>}</h5>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm text-center">
                            <button type="submit" className="btn btn-primary p-4">Check my answer</button>
                            <button type="button" className="btn btn-primary float-end" onClick={() => setIsVisible(!isVisible)}><i className="bi bi-percent"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AnswerSection;