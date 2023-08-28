import React, { useState } from 'react';
import Projects from './Projects';
import ReactDOM from 'react-dom';

// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'
// Img
import Img1 from '../assets/project1.png'
import Img2 from '../assets/project2.png'
import Img3 from '../assets/project4.png'
import Img4 from '../assets/project3.png'
import './Skills.css';


const Work = () => {
	const [showProject, setShowProject] = useState(false);
	function openProjectInNewWindow() {
		const newWindow = window.open('', '_blank'); // Open a new window
		if (!newWindow) return; // If a new window couldn't be opened (maybe due to popup blockers), exit the function
	
		// Create a new root div in the new window
		const root = newWindow.document.createElement('div');
		newWindow.document.body.appendChild(root);
	
		// Use ReactDOM to render the Projects component inside the new window
		ReactDOM.render(<Projects />, root);
	}
	return (
	// 	<div>
	// 	<h2 className='h2 leading-tight text-accent'>
	// 		My Latest <br />
	// 		Work
	// 	</h2>
	// 	<p className='max-w-sm mb-16'>
	// 		{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deserunt numquam deleniti accusamus magnam non. Ipsum illum nostrum nihil. */}
	// 	</p> 
	// 	<button className="btn btn-lg" onClick={openProjectInNewWindow}>Open Project</button>

	// </div>
		<section className="section" id="work">
			<div className="container mx-auto">
			<div className="skills-section">
            <h2>My Latest Work</h2>
			<a href='https://github.com/Yugi71120'>
		<button  className="btn btn-lg">View All Projects</button></a>
        </div>
				<div className='flex flex-col lg:flex-row gap-x-10'>
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
					>
						{/* Text */}
					
						{/* Image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* Overlay */}
							
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* Img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
							{/* Pretitle */}
							<a href='https://eyeseliteagent.in/'>
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>
								Energy Young Entrepreneurs Services								</span>
							</div>
							{/* Title */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>
								Real Estate Elite Agent
								</span>
							</div>
							</a>
						</div>
							{/* Image */}
							<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* Img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt="" />
							{/* Pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>
								Munnar Tripplanners
								</span>
							</div>
							{/* Title */}
							<a href='https://munnartripplanners.in/'>
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>
								Trip Planner website
								</span>
							</div>
							</a>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex flex-col gap-y-10'
					>
						{/* Image */}
						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* Img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
							{/* Pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>
								Munnar Expeditions
								</span>
							</div>
							{/* Title */}
							<a href='https://munnarexpeditions.in/'>
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>
								Tour Guide Website
								</span>
							</div>
							</a>
						</div>

						<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
							{/* Overlay */}
							<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
							{/* Img */}
							<img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
							{/* Pretitle */}
							<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
								<span className='text-gradient'>
									Python Backdoor
								</span>
							</div>
							{/* Title */}
							<a href='https://github.com/Yugi71120/python-backdoor.git'>
							<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
								<span className='text-3xl text-white'>
								Remote access to a target machine
								</span>
							</div>
							</a>
						</div>
						
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
