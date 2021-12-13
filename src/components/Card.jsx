import React from "react";
import Start from './App'
import Success from "./Success";
import Fail from "./Fail";

import miniLogo from '../assets/logo-mini.png'
import turn from '../assets/turn.png'


export default function Card(props) {
    const [index, setIndex] = React.useState(0)
    const [frontFace, setFrontFace] = React.useState(true)
    const [backFaceButton, setBackFaceButton] = React.useState('buttons')
    const [border, setBorder] = React.useState('boderless')
    const results = [
        { level: 'neutral', text: 'Aprendi agora' },
        { level: 'bad', text: 'Não lembrei' },
        { level: 'good', text: 'Lembrei com esforço' },
        { level: 'great', text: 'Zap!' },
    ]
    const buttons = results.map((result) => {
        return (
            <button className={`result ${result.level}`}
                onClick={memory}>
                {result.text}
            </button>
        )
    })

    function memory(event) {
        setBackFaceButton('next')
        setBorder(event.target.classList[1])
        if (event.target.innerHTML === 'Não lembrei') {
            props.setFailure(props.fail + 1)
        }else if(event.target.innerHTML === 'Zap!'){
            props.setZap(props.zap + 1)
        }
    }

    function nextOne() {
        setBorder('boderless')
        if ((index + 1) < props.userFlashcards.length) {
            setIndex(index + 1)
            setFrontFace(true)
            setBackFaceButton('buttons')
        } else if (props.fail === 0 && props.zapp === props.flashcardTarget) {
            return props.setScreen(<Success setScreen={props.setScreen} />)
        } else {
            return props.setScreen(<Fail setScreen={props.setScreen} fail={props.fail} flashcardTarget={props.flashcardTarget} />)
        }
    }

    return (
        <>
            <header className='navbar'>
                <img onClick={() => props.setScreen(<Start />)} src={miniLogo} alt="Zapp Recall" />
            </header>
            <div className={`card ${border}`} data-identifier="flashcard">
                <div data-identifier="counter" className='flashcard-index'>{index + 1}/{props.userFlashcards.length}</div>
                {frontFace === true ?
                    <div className='front-face'>
                        <div className='front-face-question'>
                            {props.userFlashcards[index].question}
                        </div>
                        <div data-identifier="arrow" className='next'
                            onClick={() => setFrontFace(false)}>
                            <img src={turn} alt="arrow" />
                        </div>
                    </div> :
                    <div className='back-face'>
                        <div className="back-face-question">{props.userFlashcards[index].question}</div>
                        <div className='back-face-answer'>
                            {props.userFlashcards[index].answer}
                        </div>
                        <div className='back-face-results'>
                            {backFaceButton === 'buttons' ?
                                buttons :
                                <div className='next'
                                    onClick={nextOne}>
                                    <img src={turn} alt="arrow" />
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    )
}