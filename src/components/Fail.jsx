import React from "react";
import App from "./App";
import sad from '../assets/sad.png'

export default function Fail (props) {
    let failMsg = `Você esqueceu ${props.fail} flashcards..Não desanime! Na próxima você consegue!`
    return (
            <div className="fail-box">
                <h1 className='fail-title'>Parabéns!
                    <img src={sad} />
                </h1>
                <p className="fail-paragraph">{failMsg}</p>
                <button className='big-btn fail-btn'>
                    Tentar novamente
                    <ion-icon name="play-forward-sharp"></ion-icon>
                </button>
            </div>
    )
}