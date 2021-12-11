import App from "./App";
import React from "react";
import party from '../assets/party.png'

export default function Success(props) {
    return (
        <>
            <div className="success-box">
                <h1 className='success-title'>Parabéns!
                    <img src={party} />
                </h1>
                <p className="success-paragraph">Você não esqueceu nenhum flashcard</p>
                <button className='big-btn success-btn'>
                    Tentar novamente
                    <ion-icon name="play-forward-sharp"></ion-icon>
                </button>
            </div>
        </>
    )
}