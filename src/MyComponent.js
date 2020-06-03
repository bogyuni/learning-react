import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	static defaultProps = {
		name: 'DefaultName!!!',
	};

	static propTypes = {
		name: PropTypes.string, // name props type is sting
		age: PropTypes.number.isRequired, // age is number
	};

	state = {
		number: 0,
	};

	render() {
		return (
			<div>
				<p>Hi My name is {this.props.name}</p>
				<p>i'm {this.props.age} old age</p>
				<p>number : {this.state.number}</p>
				<button
					onClick={() => {
						this.setState({
							number: this.state.number + 1,
						});
					}}
				>
					Plus Num
				</button>
			</div>
		);
	}
}

export default MyComponent;
