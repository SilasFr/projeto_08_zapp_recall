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
	function Start(props) {
		const [flashcardTarget, setFlashcardTarget] = React.useState('')
		return (
			<div className="start">
				<div className="logo">
					<img src={logo} />
				</div>
				<div className="login">
					<input
						value={flashcardTarget}
						onChange={event => setFlashcardTarget(event)}
						type="text"
						placeholder="Sua meta de zaps" />
					<button className='big-btn' onClick={() => {
						setScreen(<Flashcards setScreen={setScreen} />)
					}}>Praticar React
						<ion-icon name="play-forward-sharp"></ion-icon>

					</button>
				</div>
			</div>
		)
	}

}
