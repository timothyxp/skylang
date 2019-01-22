import React from 'react';
import {NavLink}	 from 'react-router-dom';
import Button from '../../Form/Button/button.js';
import Audio from '../../Pure/Audio/audio.js';
import listening1 from './listening1.json';
import listening2 from './listening2.json';
import Survey from '../../Pure/Survey/survey.js';

import './listening.css';

class Listening extends React.Component {
	constructor() {
		super();
		this.state={
			listening:listening1.listening.concat(listening2.listening),
			answers:[]
		};
	}

	handleInputChange = event => {
		this.setState({
			answers:{...this.state.answers,...{[event.target.name]:event.target.value}}
		});
	}

	handleSubmit = () => {
		console.log(this.state.answers);
		let all=this.state.listening.length;
		let correct=0;
		for (let i=0; i<all; i++) {
			if(this.state.listening[i].correct===this.state.answers[i])
				correct++;
		}
		this.props.onSubmit(this.state.answers, correct, all);
	}

	render() {
		return(
			<div className="Listening">
				<div className="Listening__Content">
					<div className="Big-Text">Listening</div>
					<div className="Listening__Test">
						<div className="Listening_Audio">
							<Audio src="/audio/track1.ogg"/>
						</div>
						<Survey test={listening1.listening} 
						onChange={this.handleInputChange}/>
						<div className="Listening_Audio">
							<Audio src="/audio/Track2.mp3"/>
						</div>
						<Survey test={listening2.listening}
						onChange={this.handleInputChange}
						questionsBefore={listening1.listening.length}/>
					</div>
					<div className="Test__Link">
						<NavLink to="/test/3" >
							<Button onClick={this.handleSubmit}>Далее</Button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Listening;