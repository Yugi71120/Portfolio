// import React from 'react';
// // Icon
// import { BsArrowUpRight } from 'react-icons/bs'
// // Motion
// import { motion } from 'framer-motion'
// // Variants
// import { fadeIn } from '../variants'

// // Services data
// const services = [
// 	{
// 		name: 'UI/UX Design',
// 		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in deserunt maiores perspiciatis quia.',
// 		link: 'Learn more',
// 	},
// 	{
// 		name: 'Development',
// 		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in deserunt maiores perspiciatis quia.',
// 		link: 'Learn more',
// 	},
// 	{
// 		name: 'Digital Marketing',
// 		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in deserunt maiores perspiciatis quia.',
// 		link: 'Learn more',
// 	},
// 	{
// 		name: 'Product Branding',
// 		description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint in deserunt maiores perspiciatis quia.',
// 		link: 'Learn more',
// 	}
// ]

// const Services = () => {
// 	return (
// 		<section className="section" id="services">
// 			<div className="container mx-auto">
// 				<div className='flex flex-col lg:flex-row'>
// 					{/* Text & Image */}
// 					<motion.div
// 						variants={fadeIn("right", 0.3)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}
// 						className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
// 					>
// 						<h2 className='h2 text-accent mb-6'>What I Do.</h2>
// 						<h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
// 						<button className='btn btn-sm'>See my work</button>
// 					</motion.div>

// 					{/* Services */}
// 					<motion.div
// 						variants={fadeIn("left", 0.5)}
// 						initial="hidden"
// 						whileInView={"show"}
// 						viewport={{ once: false, amount: 0.3 }}
// 						className='flex-1'
// 					>
// 						{/* Service list */}
// 						<div>
// 							{
// 								services.map((service, index) => {
// 									// destructure service
// 									const { name, description, link } = service;
// 									return (
// 										<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
// 											<div className='max-w-[476px]'>
// 												<h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
// 													{name}
// 												</h4>
// 												<p className='font-secondary leading-tight'>
// 													{description}
// 												</p>
// 											</div>
// 											<div className='flex flex-col flex-1 items-end'>
// 												<a href="#services" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
// 													<BsArrowUpRight />
// 												</a>
// 												<a href="#services" className='text-gradient text-sm'>
// 													{link}
// 												</a>
// 											</div>
// 										</div>
// 									)
// 								})
// 							}
// 						</div>
// 					</motion.div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Services;
import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import  '../components/Services.css'

const services = [
    // ... your services data
    {
        name: 'Web Development',
        description: 'Crafting digital experiences that combine creativity, functionality, and user-friendly design. Let your ideas come to life on the web.',
        popupDescription: 'With expertise in frontend and backend technologies, I specialize in creating responsive and dynamic websites tailored to your unique needs. My services include:\n\n- Custom website development\n- E-commerce solutions\n- CMS integration\n- Web performance optimization',
        link: 'Learn more',
      },
      { 
        name: 'Pentesting',
        description: 'Ensuring the digital fortresses are impenetrable. Through rigorous security testing, vulnerabilities are identified and fortified.',
        popupDescription: 'My proficiency in ethical hacking and security assessment guarantees your systems are safeguarded against cyber threats and breaches. I offer:\n\n- Vulnerability assessment\n- Penetration testing\n- Security audit\n- Risk analysis',
        link: 'Learn more',
      },
      {
        name: 'UI/UX Design',
        description: 'Shaping digital aesthetics for seamless user interactions. From wireframes to visually stunning designs, user experience is at the heart.',
        popupDescription: 'Combining creativity and empathy, I create user-centric designs that enhance usability and captivate audiences across digital platforms. My expertise covers:\n\n- User research\n- Wireframing and prototyping\n- Visual design\n- Interaction design',
        link: 'Learn more',
      },
      {
        name: 'Digital Marketing',
        description: 'Amplifying online presence through strategic campaigns. From SEO to social media, let your brand thrive in the digital landscape.',
        popupDescription: 'I specialize in devising effective digital marketing strategies that boost visibility, engagement, and conversions in the competitive online world. My services encompass:\n\n- Search engine optimization (SEO)\n- Social media management\n- Content marketing\n- Analytics and performance tracking',
        link: 'Learn more',
      }
      
];

const Services = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedService(null);
    };

    return (
        <section className="section" id="services">
			
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" />

            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>

                    {/* ... your existing content for Text & Image */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 mb-12 lg:mb-0'
                        >
						<h2 className='h2 text-accent mb-6'>What I Do.</h2>
						<h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance web Developer Developer with over 2 years of experience.</h3>
						{/* <button className='btn btn-sm'>See my work</button> */}
					</motion.div>
	{/* Services */}
	
                    <motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1'
                        //... your existing motion properties
                    >
                        {/* Service list */}
                        <div>
                            {
                                
                                services.map((service, index) => {
                                    const { name, description, link } = service;
                                    return (
										<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                            <div className='max-w-[476px]'>
                                             <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                                {name}
                                             </h4>
                                             <p className='font-secondary leading-tight'>
                                                 {description}
                                            </p>
                                             </div>
                                            <div className='flex flex-col flex-1 items-end'>
                                                 <a href="#services" className='btn w-9 h-9 mb-[42px] flex justify-center items-center' onClick={() => openModal(service)}>
                                                <BsArrowUpRight />
                                                   </a>
                                                <button className='text-gradient text-sm' onClick={() => openModal(service)}>
                                                   {link}
                                                </button>
                                               </div>
                                          </div>
                                    );
                                })
                            }
                        </div>
                    </motion.div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-xl w-full">
                            <h3 className="text-xl font-semibold mb-4">{selectedService?.name}</h3>
                            <p>{selectedService?.popupDescription}</p>
                            <button className="absolute top-2 right-2" onClick={closeModal}>&times;</button>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Services;
