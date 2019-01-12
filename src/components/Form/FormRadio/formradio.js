import React from 'react';
import './formradio.css';

class FormRadio extends React.Component {
	render() {
		return(
			<label className="FormRadio__label">
				<input className="FormRadio__input"
				type={this.props.type? this.props.type:'text'}
				value={this.props.value}
				name={this.props.name}
				onChange={this.props.onChange}/>
				{this.props.children}
			</label>
		);
	}
}

export default FormRadio;