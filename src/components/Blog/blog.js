import React from 'react';

class Blog extends React.Component {

	r(){
		let arr=[];
		for(let i=0;i<100;i++){
			arr.push(<div>About</div>);
		}
		return arr;
	}

	render() {
		return(
			<div>
				<div>Blog</div>
				<div>{this.r()}</div>
			</div>
		);
	}
}

export default Blog;