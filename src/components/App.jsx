import React from 'react'
import Flashcards from './Flashcards'

export default function App() {
	return (
		<>
			<Screen/>
		</>
	)
}

function Screen(){
	return (
	   <Start/>
	)
}

function Start(){
	let target = 0
	return(
		<div className="start">
		   <div className="logo">
			   <h1>ZapRecall</h1>
		   </div>
		   <div className="login">
			   <input type="text" placeholder="Sua meta de zaps"/>
			   <button onClick= {()=>{
					 Flashcards(target)
				 }}>Praticar React</button>
		   </div>
	   </div>
	)
}