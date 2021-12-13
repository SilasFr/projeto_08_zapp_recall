import React from "react"
import sad from '../assets/sad.png'
import Start from './App'

export default function Fail({ setScreen, fail }) {
    let failMsg = `Você esqueceu ${fail} flashcards..Não desanime! Na próxima você consegue!`
    return (
        <div className="fail-box">
            <h1 className='fail-title'>Putz..
                <img src={sad} alt="" />
            </h1>
            <p className="fail-paragraph">{failMsg}</p>
            <button onClick={() => setScreen(<Start />)} className='big-btn fail-btn'>
                Tentar novamente
                <ion-icon name="play-forward-sharp"></ion-icon>
            </button>
        </div>
    )
}