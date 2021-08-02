import React from 'react'
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    // if (props.quizLength === props.answerNumber) {
    //   const time = window.setTimeout(() => {
    //
    //         clearTimeout(time)
    //     }, 2000)
    // } else {
    return (
    <div className='ActiveQuiz'>
        <p className='Question'>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} in {props.quizLength}</small>
        </p>
        <AnswersList
            state={props.state}
            answers = {props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)}
export default ActiveQuiz
