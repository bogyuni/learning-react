import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
// import EventPractice from './EventPractice';
// import MyComponent from './MyComponent';
// import './App.css';

class App extends Component {
	// render() {
	// 	const text = 'hi!';
	// 	const condition = true;
	// 	const rHeight = Math.round(Math.random() * 300) + 50;
	// 	const rWidth = Math.round(Math.random() * 300) + 50;
	// 	console.log(rWidth, rHeight);
	// 	const style = {
	// 		backgroundColor: 'red',
	// 		border: '2px solid yellow',
	// 		height: rHeight,
	// 		width: rWidth,
	// 		WebkitTransition: 'all',
	// 	};
	// 	return (
	// 		<div className="my-div">
	// 			{/* Hello world */}
	// 			<h1>react !!</h1>
	// 			<h2>{condition ? 'true' : text} React!!!</h2>
	// 			<p style={style}>
	// 				{rHeight}, {rWidth}
	// 			</p>
	// 			<input type="text" />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return <MyComponent name={'Beerboy'} age={4} />;
	// }

	// render() {
	// 	return <EventPractice />;
	// }

	render() {
		return <ValidationSample />;
	}
}

export default App;
