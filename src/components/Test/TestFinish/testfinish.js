import React from 'react';
import Join from '../../About/Join/join.js';

import './testfinish.css';

class TestFinish extends React.Component {
	render() {
		return(
			<div className="Test-Finish_Header">
				<div className="Test-Finish_Header_Text">
					<div className="Test-Finish_Results">
						<div className="Big-Text">
							Правильных ответов({this.props.correct}/{this.props.all})
						</div>
					</div>
					<Join test="$this.props.correct из $this.props.all"/>
				</div>
			</div>
		);
	}
}

export default TestFinish;