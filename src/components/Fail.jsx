import React from "react";
import App from "./App";

export default function Fail () {
    return (
        <>
            <div> <h1 className='success-title'>Putz... 😥️</h1> </div>
            <p>Você esqueceu{'fail'} flashcards</p>
            <button className='big-btn' onClick={ }>
                Tentar novamente
                <ion-icon name="play-forward-sharp"></ion-icon>
            </button>
        </>
    )
}