import React from 'react'
import Flashcards from './Flashcards'
import logo from '../assets/logo.png'
import Success from './Success'
import Fail from './Fail'

export default function App() {
	const [screen, setScreen] = React.useState(<Start />)

	return (
		<>
			{screen}
		</>
	)
	function Start() {
		const [flashcardTarget, setFlashcardTarget] = React.useState('')
		console.log(flashcardTarget)
		return (
			<div className="start">
				<div className="logo">
					<img src={logo} />
				</div>
				<div className="login">
					<input
						value={flashcardTarget}
						onChange={event => setFlashcardTarget(event.target.value)}
						type="text"
						placeholder="Sua meta de zaps" />
					<button className='big-btn' onClick={() => {
						if (!Number.isNaN(flashcardTarget)) {
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
