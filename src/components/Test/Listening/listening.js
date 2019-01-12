import React from 'react';
import {NavLink}	 from 'react-router-dom';
import Button from '../../Form/Button/button.js';
import Audio from '../../Pure/Audio/audio.js';
import listening from './listening.json';
import FormColumn from '../../Form/FormColumn/FormColumn.js';
import FormRadio from '../../Form/FormRadio/formradio.js';
import ReactAudioPlayer from 'react-audio-player';

import './listening.css';

class Listening extends React.Component {
	constructor() {
		super();
		this.state={
			listening:listening.listening
		};
		console.log(this.state.listening);
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
						<Audio src="/audio/track1.ogg"/>
						{
							this.state.listening.map((key,index)=>{
								return (
								<FormColumn key={index}>
									<div className="Listening__Question">
										<div className="Listening__Question__Number">
										{index+1}.</div>
										<div>{key.question}</div>
									</div>
									<FormRadio type="radio" name={index} value="a" 
									onChange={this.handleInputChange}>
										{key.a}</FormRadio>
									<FormRadio type="radio" name={index} value="b"
									 onChange={this.handleInputChange}>
										{key.b}</FormRadio>
									<FormRadio type="radio" name={index} value="c"
									onChange={this.handleInputChange}>
										{key.c}</FormRadio>
									<FormRadio type="radio" name={index} value="d"
									onChange={this.handleInputChange}>
										{key.d}</FormRadio>
								</FormColumn>
								);
						})}
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