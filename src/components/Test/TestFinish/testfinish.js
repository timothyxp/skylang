import React from 'react';

class TestFinish extends React.Component {
	render() {
		return(
			<div>
				<div>Correct-{this.props.correct}</div>
				<div>All-{this.props.all}</div>
			</div>
		);
	}
}

export default TestFinish;