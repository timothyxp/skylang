import React from 'react';
import {NavLink} from 'react-router-dom';
import grammar from './grammar.json';
import Button from '../../Form/Button/button.js';
import FormColumn from '../../Form/FormColumn/FormColumn.js';
import FormRadio from '../../Form/FormRadio/formradio.js';

import './grammar.css';

class Grammar extends React.Component {
	constructor() {
		super();
		this.state = {
			grammar:grammar.grammar
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
						{
							this.state.grammar.map((key,index)=>{
								return (
								<FormColumn key={index}>
									<div className="Grammar__Question">
										<div className="Grammar__Question__Number">
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