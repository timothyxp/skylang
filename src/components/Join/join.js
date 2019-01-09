import React from 'react';
import FormRow from '../Form/FormRow/FormRow.js';
import FormColumn from '../Form/FormColumn/FormColumn.js';
import FormText from '../Form/FormText/formtext.js';
import Button from '../Form/Button/button.js';
import emailjs from '../../emailjs/emailjs.js';

import './join.css';

class Join extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			email:'',
			number:''
		}
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	clearForm() {
		this.setState({
			name:'',
			email:'',
			number:''
		});
	}

	send = event => {
		event.preventDefault();
		let template_params = {
		    "name": this.state.number,
    		"email": this.state.email,
    		"number": this.state.number,
    		"message_html": ""
		};
		
		emailjs.send('yahoo', 'template_W7sWOdTA', template_params)
		.then(response=>{
			console.log('response', response.status, response.text);
		}, error => {
			console.log('error', error);
		});

		this.clearForm();
	}

	render() {
		return(
			<div className="Join_App">
				<div className="Big-Text">Пройдите первый урок бесплатно</div>
					<div className="Form_Join">
						<FormRow onSubmit={this.send}>
							<FormText name="name"
								onChange={this.handleInputChange}
								placeholder="Enter your name"
								value={this.state.name}/>
							<FormText name="email"
								onChange={this.handleInputChange}
								placeholder="Enter your e-mail"
								value={this.state.email}/>
							<FormText name="number"
								onChange={this.handleInputChange}
								placeholder="Enter your number"
								value={this.state.number}
								type="tel"/>
							<Button type="submit">Send</Button>
						</FormRow>
				</div>
			</div>
		);
	}
}

export default Join;