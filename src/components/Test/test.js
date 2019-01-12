import React from 'react';
import {Route} from 'react-router-dom';
import TestBegin from './Test_Begin/testbegin.js';
import Grammar from './Grammar/grammar.js';
import Listening from './Listening/listening.js';

import './test.css';

class Test extends React.Component {
	constructor() {
		super();
		this.state={
			answers:{}
		};
	}

	handleSubmit = answers => {
		this.setState({
			answers:{...this.state.answers,...answers}
		});
	}

	render() {
		console.log(this.state.answers);
		return(
			<div>
				<Route exact path="/test" component = {TestBegin}/>
				<Route path="/test/1" component = {() => 
					<Grammar onSubmit={this.handleSubmit}/>}/>
				<Route path="/test/2" component={Listening}/>
			</div>
		);
	}
}

export default Test;