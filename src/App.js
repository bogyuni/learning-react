import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
				<button onClick={() => this.ScrollBox.scrollToBottom()}>Go to bottom</button>
				<p>TEST</p>
			</div>
		);
	}
}

export default App;
