import React from 'react';
import FormColumn from '../../Form/FormColumn/FormColumn.js';
import FormRadio from '../../Form/FormRadio/formradio.js';

import './survey.css';

class Survey extends React.Component {
	render() {
		return(
			<div>
				{
				this.props.test.map((key,index) =>{
					return (
					<FormColumn key={index}>
						<div className="Survey__Question">
							<div className="Survey__Question__Number">
							{index+1}.</div>
							<div>{key.question}</div>
						</div>
						<FormRadio type="radio" name={index+this.props.questionsBefore} value="a" 
						onChange={this.props.onChange}>
							{key.a}</FormRadio>
						<FormRadio type="radio" name={index+this.props.questionsBefore} value="b"
						 onChange={this.props.onChange}>
							{key.b}</FormRadio>
						<FormRadio type="radio" name={index+this.props.questionsBefore} value="c"
						onChange={this.props.onChange}>
							{key.c}</FormRadio>
						<FormRadio type="radio" name={index+this.props.questionsBefore} value="d"
						onChange={this.props.onChange}>
							{key.d}</FormRadio>
					</FormColumn>
					);
				})}
			</div>
		);
	}
};

export default Survey;

Survey.defaultProps={
	questionsBefore:0	
};