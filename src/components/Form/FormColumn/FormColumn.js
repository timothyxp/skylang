import React from 'react';
import './FormColumn.css';

class FormColumn extends React.Component {
	render() {
		return(
			<form className="FormColumn" onSubmit={this.props.onSubmit}>
				{this.props.children}
			</form>
		);
	}
}

export default FormColumn;