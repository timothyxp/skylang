import React from 'react';
import Join from './Join/join.js';
import './about.css';

class About extends React.Component {
	render() {
		return(
			<div className="About">
				<div className="JoinForm">
					<Join/>
				</div>
			</div>
		);
	}
}

export default About;