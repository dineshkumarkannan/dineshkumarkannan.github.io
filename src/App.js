import React, { Component } from 'react'

import { Navigation, Main, Header } from './components'

import './index.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Navigation />
					<Main />
				</main>
			</div>
		)
	}
}

export default App
