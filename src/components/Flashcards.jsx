import React from 'react'
import Card from './Card'
import turn from '../assets/turn.png'

export default function Flashcards({ setScreen }) {

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
                onClick={goToNextButton}>
                {result.text}
            </button>
        )
    })

    const [backFaceButton, setBackFaceButton] = React.useState(buttons)

    function goToNextButton() {
        setBackFaceButton(
            <div className='next'
                onClick={next} >
                <img src={turn} />
            </div>)
    }

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
        <Card setScreen={setScreen}
            flashcard={flashcard}
            userFlashcards={userFlashcards}
            next={next} backFaceButton={backFaceButton}
            setBackFaceButton={setBackFaceButton}
            goToNextButton={goToNextButton}
        />
    )
}