import React from 'react';
import {Route} from 'react-router-dom';
import TestBegin from './Test_Begin/testbegin.js';
import Grammar from './Grammar/grammar.js';
import Listening from './Listening/listening.js';
import TestFinish from './TestFinish/testfinish.js';

import './test.css';

class Test extends React.Component {
	constructor() {
		super();
		this.state={
			correct:0,
			allGrammar:0,
			allListening:0
		};
	}

	handleSubmitGrammar = (answers, correct, all) => {
		this.setState({
			grammar:{...this.state.grammar,...answers},
			correct:this.state.correct+correct,
			allGrammar:Number.isNaN(all)?0:all
		});
	}

	handleSubmitListening = (answers, correct, all) => {
		this.setState({
			listening:{...this.state.listening,...answers},
			correct:this.state.correct+correct,
			allListening:Number.isNaN(all)?0:all
		});
	}

	render() {
		return(
			<div>
				<Route exact path="/test" component = {TestBegin}/>
				<Route path="/test/1" component = {() => 
					<Grammar onSubmit={this.handleSubmitGrammar}/>}/>
				<Route path="/test/2" component={() => 
					<Listening onSubmit={this.handleSubmitListening}/>}/>
				<Route path="/test/3" component ={() => 
					<TestFinish correct={this.state.correct} 
					all={this.state.allListening+this.state.allGrammar}/>}/>
			</div>
		);
	}
}

export default Test;