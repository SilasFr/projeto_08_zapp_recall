import React from 'react'
import App from './App'
import miniLogo from '../assets/logo-mini.png'
import turn from '../assets/turn.png'

export default function Flashcards() {
    const userFlashcards = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __ ',
            answer: 'erenciar os'
        },
        {
            question: 'Usamos props para __',
            answer: 'Usamos props para __'
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]
    const [flashcard, setflashcard] = React.useState([{
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    }])

    const results = [
        { level: 'awful', text: 'Aprendi agora' },
        { level: 'bad', text: 'Não lembrei' },
        { level: 'good', text: 'Lembrei com esforço' },
        { level: 'great', text: 'Zap!' },
    ]

    const buttons = results.map((result) => {
        return (

            <button className={`result ${result.level}`}
                onClick={() => setBackFaceButton(
                    <div className='next'
                        onClick={()=>next()} >
                        <img src='./assets/turn.png' />
                    </div>)}>
                {result.text}
            </button>
        )
    })

    const [backFaceButton, setBackFaceButton] = React.useState(buttons)

    function next() {
        for (let i = 0; i < userFlashcards.length; i++) {
            const item = userFlashcards[i]
            if (flashcard[flashcard.length - 1].question === item.question && userFlashcards[i + 1] !== undefined) {
                console.log('bbb')
                const nextFlashcard = userFlashcards[i + 1]
                setBackFaceButton(buttons)
                return setflashcard([...flashcard, nextFlashcard])

            }
        }
    }

    return (
        <>
            <header className='navbar'>
                <img src={miniLogo} />
            </header>
            <div className='card'>
                <div className='flashcard-index'>{flashcard.length}/{userFlashcards.length}</div>
                <div className='front-face'>
                    <div className='front-face-question'>
                        {flashcard[flashcard.length - 1].question}
                    </div>
                    <div className='next'
                        onClick={next}>
                        <img src={turn} />
                    </div>

                </div>
                <div className='back-face'>
                    <div className='back-face-question'>
                        {flashcard[flashcard.length - 1].answer}
                    </div>
                    <div className='back-face-results'>
                        {backFaceButton}
                    </div>
                </div>
            </div>


        </>
    )
}