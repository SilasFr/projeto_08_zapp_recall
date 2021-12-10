import React from 'react'
import Flashcards from './Flashcards'

export default function App() {
	const [screen, setScreen] = React.useState(<Flashcards />)
	return (
		<>
			{screen}
		</>
	)
	function Start() {
		let target = 0
		return (
			<div className="start">
				<div className="logo">
					<img src='./assets/logo.png'/>
				</div>
				<div className="login">
					<input type="text" placeholder="Sua meta de zaps" />
					<button className='big-btn' onClick={() => {
						setScreen(<Flashcards />)
					}}>Praticar React
					<ion-icon name="play-forward-sharp"></ion-icon>
					
					</button>
				</div>
			</div>
		)
	}

}
