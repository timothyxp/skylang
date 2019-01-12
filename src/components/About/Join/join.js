import React from 'react';
import FormRow from '../../Form/FormRow/FormRow.js';
import FormColumn from '../../Form/FormColumn/FormColumn.js';
import FormText from '../../Form/FormText/formtext.js';
import Button from '../../Form/Button/button.js';
import emailjs from '../../../emailjs/emailjs.js';

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

	handleInputFocus = event => {
		this.setState({
			['error_'+event.target.name]:false
		});
	}

	clearForm() {
		this.setState({
			name:'',
			email:'',
			number:''
		});
	}

	validationForm() {
		let check = true;
		if(this.state.name==='') {
			this.setState({
				error_name:true
			});
			check=false;
		} else {
			this.setState({
				error_name:false
			});
		}
		if(this.state.email==='') {
			this.setState({
				error_email:true
			});
			check=false;
		} else {
			this.setState({
				error_email:false
			});
		}
		if (!(this.state.number.length===11 ||
			this.state.number.length!==12 && this.state.number[0]==='+')) {
			this.setState({
				error_number:true
			});
			check=false;
		} else {
			this.setState({
				error_number:false
			});
		}
		return check;
	}

	send = event => {
		event.preventDefault();
		if(!this.validationForm())
			return;
		let template_params = {
		    "name": this.state.name,
    		"email": this.state.email,
    		"number": this.state.number,
    		"message_html": ""
		};
		
		emailjs.send('yahoo', 'template_W7sWOdTA', template_params)
		.then(response => {
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
								value={this.state.name}
								error={this.state.error_name ? true : false}
								onFocus={this.handleInputFocus}/>
							<FormText name="email"
								onChange={this.handleInputChange}
								placeholder="Enter your e-mail"
								value={this.state.email}
								error={this.state.error_email ? true : false}
								onFocus={this.handleInputFocus}/>
							<FormText name="number"
								onChange={this.handleInputChange}
								placeholder="Enter your number"
								value={this.state.number}
								error={this.state.error_number ? true : false}
								onFocus={this.handleInputFocus}/>
							<Button type="submit">Send</Button>
						</FormRow>
				</div>
			</div>
		);
	}
}

export default Join;