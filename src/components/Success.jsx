import React from "react";
import App from "./App";

export default function Success() {
    return (
        <>
            <div> <h1 className='success-title'>Parabéns 🎉️</h1> </div>
            <p>Você não esqueceu nenhum flashcard</p>
            <button className='big-btn' onClick={ }>
                Tentar novamente 
                <ion-icon name="play-forward-sharp"></ion-icon>
            </button>
        </>
    )
}