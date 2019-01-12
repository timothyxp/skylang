import React from 'react';

class Audio extends React.Component {
	render() {
		return(
			<audio controls>
				<source src={this.props.src} type='audio/ogg'/>
			</audio>
		); 
	}
}

export default Audio;