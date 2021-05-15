import React, { useEffect, useState } from 'react'
import { firestore } from '../services/firebase'

function QuestionSection () {
    const [title, setTitle] = useState("")
    const [questionText, setQuestionText] = useState("")
    const [imageUri, setImageUri] = useState("")
    const questionId = "balances"

    //Gets question text
    useEffect(async () => {
        const snapshot = await firestore.collection("Questions").doc(questionId).get()
        const questionData = snapshot.data()
        const questionDetails = questionData[questionId]
        setTitle(questionDetails[questionId].questions.title)
        setQuestionText(questionDetails[questionId].questions.fullquestion.question)
        setImageUri(questionDetails[questionId].questions.fullquestion.questionImage)
    },[])

    return (
        <div className="col-sm">
            <h3 className="text-center">{title}</h3>
            <div className="p-3 mb-2 bg-light">
                <div className="text-center">
                    <img className="mb-4 rounded img-fluid" src={imageUri} alt="" />
                </div>
                <p>{questionText}</p>
            </div>
        </div>
    );
}

export default QuestionSection;