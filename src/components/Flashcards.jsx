import React from 'react'
import App from './App'

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
    let index = 0
    const [flashcard, setflashcard] = React.useState([{
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    }])

    function next() {
        for(let i=0; i<userFlashcards.length; i++){
            const item = userFlashcards[i]
            if(flashcard[flashcard.length-1].question === item.question && userFlashcards[i+1] !== undefined){

                const nextFlashcard = userFlashcards[i+1]
                return setflashcard([...flashcard, nextFlashcard])

            }
        }
    }

    return (
        <>
            <header className='navbar'>
                <img src='./assets/logo-mini.png' />
            </header>
            <div className='card'>
                <div className='front-face'>
                    <div className='flashcard-index'>{index}/{userFlashcards.length}</div>
                    <div className='front-face-question'>
                        {flashcard[flashcard.length - 1].question}
                    </div>
                    <div className='next'
                        onClick={next} >
                        <img src='./assets/turn.png' />
                    </div>
                </div>
                <div className='back-face'>
                    <div className='back-face-question'>
                        {flashcard[flashcard.length - 1].answer}
                    </div>
                </div>
            </div>


        </>
    )
}