import React from 'react';
import {NavLink} from 'react-router-dom';
import grammar from './grammar.json';
import Button from '../../Form/Button/button.js';
import Survey from '../../Pure/Survey/survey.js';

import './grammar.css';

class Grammar extends React.Component {
	constructor() {
		super();
		this.state = {
			grammar:grammar.grammar,
			answers:[]
		};
	}

	handleInputChange = event => {
		this.setState({
			answers:{...this.state.answers,...{[event.target.name]:event.target.value}}
		});
	}

	handleSubmit = () => {
		let all=this.state.grammar.length;
		let correct=0;
		for (let i=0; i<all; i++) {
			if(this.state.grammar[i].correct===this.state.answers[i])
				correct++;
		}
		this.props.onSubmit(this.state.answers, correct, all);
	}

	render() {
		return(
			<div className="Grammar">
				<div className="Grammar__Content">
					<div className="Big-Text">Grammar</div>
					<div className="Grammar__Test">
						<Survey test={this.state.grammar}
						onChange={this.handleInputChange}/>
					</div>
					<div className="Test__Link">
						<NavLink to="/test/2" >
							<Button onClick={this.handleSubmit}>Далее</Button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Grammar;