import React from 'react'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">About Me!</NavLink>
				</li>
				<li className="ml1">
					<NavLink to="/experience" activeClassName="selectedLink">
						Work experience!
					</NavLink>
				</li>
			</ul>
			<style jsx>
				{`
					nav {
						width: 100%;
						height: 3rem;
					}
					nav,
					ul {
						display: flex;
						list-style: none;
						margin: 0;
					}
					a {
						text-decoration: none;
						color: #666666;
						background-image: none;
					}
					a:focus {
						box-shadow: none;
						border-bottom: 0.05rem solid #eaeaea;
						border-radius: 0;
					}
					.ml1 {
						margin-left: 1rem;
					}
					.selectedLink {
						border-bottom: 0.05rem dotted #000000;
						color: #000000;
					}
				`}
			</style>
		</nav>
	)
}

export { Navigation }
