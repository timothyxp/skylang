import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends React.Component {
	render() {
		return(
			<button type={this.props.type}
				className="Button"
				onClick={this.props.onClick}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;

Button.defaultProps={
	onClick:()=>{}
};

Button.propTypes={
	onClick:PropTypes.func,
	type:PropTypes.string
};