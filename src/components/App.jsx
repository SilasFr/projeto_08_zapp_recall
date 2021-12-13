import React from 'react'
import Flashcards from './Flashcards'
import logo from '../assets/logo.png'

export default function App() {
	const [screen, setScreen] = React.useState(<Start />)

	return (
		<>
			{screen}
		</>
	)
	function Start() {
		const [flashcardTarget, setFlashcardTarget] = React.useState('')
		return (
			<div className="start">
				<div className="logo">
					<img src={logo} alt='zapp recall' />
				</div>
				<div className="login">
					<input
						value={flashcardTarget}
						onChange={event => setFlashcardTarget(parseInt(event.target.value))}
						type="text"
						placeholder="Sua meta de zaps" />
					<button data-identifier="start-zap-recall" className='big-btn' onClick={() => {
						if (typeof(flashcardTarget) !== 'number' && flashcardTarget!=='') {
							console.log(typeof(flashcardTarget))
							setFlashcardTarget('')
							return alert('digite um número inteiro como meta')
						} else return setScreen(<Flashcards setScreen={setScreen} />)
					}}>Praticar React
						<ion-icon name="play-forward-sharp"></ion-icon>
					</button>
				</div>
			</div>
		)
	}

}
