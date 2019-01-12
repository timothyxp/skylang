import React from 'react';
import './formtext.css';

class FormText extends React.Component {
	render() {
		let required=this.props.error?'FormText__Error':'';
		return(	
			<input className={['FormText',required].join(' ')}
			type={this.props.type? this.props.type:'text'}
				onChange={this.props.onChange}
				placeholder={this.props.placeholder}
				value={this.props.value}
				name={this.props.name}
				onFocus={this.props.onFocus}
			/>
		);
	}
}

export default FormText;