import React from 'react';
// Images
import Logo from '../assets/logo.svg'

const Header = () => {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<a href="#home" className="text-gradient btn-link">
						Portfolio
							</a>

					{/* Button */}
					<a href='#contact'>
					<button className="btn btn-sm">lets connect</button></a>
				</div>
			</div>
		</header>
	);
};

export default Header;
