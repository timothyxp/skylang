import React from 'react';
import './FormRow.css';

class FormRow extends React.Component {
	render() {
		return(
			<form className="FormRow" onSubmit={this.props.onSubmit}>
				{this.props.children}
			</form>
		);
	}
}

export default FormRow;