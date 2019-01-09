import React from 'react';
import './formtext.css';

class FormText extends React.Component {
	render() {
		return(
			<input className="FormText"
			type={this.props.type? this.props.type:'text'}
				onChange={this.props.onChange}
				placeholder={this.props.placeholder}
				value={this.props.value}
				name={this.props.name}
			/>
		);
	}
}

export default FormText;