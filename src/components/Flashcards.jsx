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
    const [flashcard, setflashcard] = React.useState(userFlashcards[0])

    function next() {
        index++
        const nextFlashcard = Array.of(userFlashcards)
        if (index % 2 === 0) {
            return setflashcard(nextFlashcard[index])
        } else {
            return setflashcard(userFlashcards[index])
        }
    }

    return (
        <>
            <div className='card'>
                <div className='question'>{flashcard.question}</div>
                <div className='answer'> {flashcard.answer} </div>
            </div>

            <div className='next'
                onClick={next} >
                Next
            </div>
        </>
    )
}