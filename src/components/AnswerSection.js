import React, { useEffect, useState } from 'react'
import { firestore } from '../services/firebase'

function AnswerSection() {
    const [title1, setTitle1] = useState("")
    const [title2, setTitle2] = useState("")
    const [title3, setTitle3] = useState("")
    const [title4, setTitle4] = useState("")
    const [answerText, setanswerText] = useState("")
    const [imageUri, setImageUri] = useState("")
    const answerId = "balances" //Should probably be done through URL and routing with useParams()

    useEffect(async () => {
        const snapshot = await firestore.collection("Answers").doc(answerId).get()
        const answerData = snapshot.data()
        const answerDetails = answerData[answerId]
        setTitle1(answerDetails[answerId].answer.ans1.title)
        setTitle2(answerDetails[answerId].answer.ans2.title)
        setTitle3(answerDetails[answerId].answer.ans3.title)
        setTitle4(answerDetails[answerId].answer.ans4.title)
    },[])

    return (
        <div className="col-12">
        <h3 className="text-center">Answers</h3>
        <div className="p-3 mb-2 bg-light">
            <div className="row">
                <div className="col-sm d-grid gap-2">
                    <button type="button" className="btn btn-secondary mb-2 p-4">{title1}</button>
                    <button type="button" className="btn btn-secondary mb-2 p-4">{title2}</button>
                </div>
                <div className="col-sm d-grid gap-2">
                    <button type="button" className="btn btn-secondary mb-2 p-4">{title3}</button>
                    <button type="button" className="btn btn-secondary mb-2 p-4">{title4}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm text-center">
                    <button type="button" className="btn btn-primary p-4">Check my answer</button>
                    <button className="btn btn-primary float-end rounded-circle"><i className="bi bi-percent"></i></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AnswerSection;