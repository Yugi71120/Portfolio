import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work';
import Timeline from './components/timeline';

const App = () => {
	return (
		<div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
			<Header />
			<Banner />
			<Nav />
			<About />
			<Skills />
			<Timeline />
			<Work />
			<Services />
			<Contact />



			{/* <div className='h-[4000px]'></div> */}
		</div>
	);
};

export default App;
