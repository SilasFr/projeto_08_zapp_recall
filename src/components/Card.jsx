import React from "react";
import Start from './App'
import Success from "./Success";
import miniLogo from '../assets/logo-mini.png'
import turn from '../assets/turn.png'


export default function Card(props) {
    const [index, setIndex] = React.useState(0)
    const [frontFace, setFrontFace] = React.useState(true)
    const [backFaceButton, setBackFaceButton] = React.useState('buttons')
    const results = [
        { level: 'awful', text: 'Aprendi agora' },
        { level: 'bad', text: 'Não lembrei' },
        { level: 'good', text: 'Lembrei com esforço' },
        { level: 'great', text: 'Zap!' },
    ]
    const buttons = results.map((result) => {
        return (
            <button className={`result ${result.level}`}
                onClick={ ()=>setBackFaceButton('next') }>
                {result.text}
            </button>
        )
    })

    function nextOne() {
        if ((index + 1) < props.userFlashcards.length) {
            console.log(props.setScreen)
            setIndex(index + 1)
            setFrontFace(true)
            setBackFaceButton('buttons')
        } else {
            return props.setScreen(<Success/>)
        }
    }

    return (
        <>
            <header className='navbar'>
                <img onClick={() => props.setScreen(<Start />)} src={miniLogo} />
            </header>
            <div className='card'>
                <div className='flashcard-index'>{index + 1}/{props.userFlashcards.length}</div>
                {frontFace === true ?
                    <div className='front-face'>
                        <div className='front-face-question'>
                            {props.userFlashcards[index].question}
                        </div>
                        <div className='next'
                            onClick={() => setFrontFace(false)}>
                            <img src={turn} />
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
                                    <img src={turn} />
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    )
}