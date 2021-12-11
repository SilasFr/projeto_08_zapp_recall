import React from 'react'
import Flashcards from './Flashcards'
import logo from '../assets/logo.png'
import Success from './Success'
import Fail from './Fail'

export default function App() {
	const [screen, setScreen] = React.useState(<Fail />)
	return (
		<>
			{screen}
		</>
	)
	function Start(props) {
		let target = 0
		return (
			<div className="start">
				<div className="logo">
					<img src={logo}/>
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
