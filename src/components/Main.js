import React from 'react'

import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom'

import { About } from './About'
import { Experience } from './Experience'

const Main = () => {
	return (
		<Switch>
			<Route exact path="/" component={About}></Route>
			<Route exact path="/experience" component={Experience}></Route>
		</Switch>
	)
}

export { Main } 
