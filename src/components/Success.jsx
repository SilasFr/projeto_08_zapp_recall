import React from "react";
import Start from './App'
import party from '../assets/party.png'

export default function Success({ setScreen }) {
    return (
        <div className="success-box">
            <h1 className='success-title'>PARABÉNS!
                <img src={party} alt="" />
            </h1>
            <p className="success-paragraph">Você não esqueceu de nenhum flashcard!</p>
            <button onClick={() => setScreen(<Start />)} className='big-btn success-btn'>
                Tentar novamente
                <ion-icon name="play-forward-sharp"></ion-icon>
            </button>
        </div>
    )
}