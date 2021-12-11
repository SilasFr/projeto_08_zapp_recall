import React from "react";
import Start from './App'
import miniLogo from '../assets/logo-mini.png'
import turn from '../assets/turn.png'

export default function Card(props) {
    return (
        <>
            <header className='navbar'>
                <img onClick={() => props.setScreen(<Start />)} src={miniLogo} />
            </header>
            <div className='card'>
                <div className='flashcard-index'>{props.flashcard.length}/{props.userFlashcards.length}</div>
                <div className='front-face'>
                    <div className='front-face-question'>
                        {props.flashcard[props.flashcard.length - 1].question}
                    </div>
                    <div className='next'
                        onClick={props.next}>
                        <img src={turn} />
                    </div>

                </div>
                <div className='back-face'>
                    <div className='back-face-question'>
                        {props.flashcard[props.flashcard.length - 1].answer}
                    </div>
                    <div className='back-face-results'>
                        {props.backFaceButton}
                    </div>
                </div>
            </div>
        </>
    )
}