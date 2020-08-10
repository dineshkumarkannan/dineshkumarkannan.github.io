import React from 'react'

import './Header.css';
import Img from './../assets/image/pp.jpg'

const Header = () => {
	return (
		<div className="bgHero">
			<img className="ss-profile-img" src={Img} alt="DineshKumar" />
			<div className="header-lable-name">
				<p className="font-medium text-2xl leading-normal pb-2 text-white">
					Hi, I'm Dinesh, I am a Creative and self-starting front-end
					web developer.
				</p>
			</div>
		</div>
	)
}

export { Header }
