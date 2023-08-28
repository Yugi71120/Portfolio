
import React from 'react';
// Images
import Image from '../assets/avatar.png'
// Icons
import { FaGithub, FaYoutube, FaDribbble, FaLinkedinIn, FaInstagram, FaTelegram, FaArrowDown, FaDownload} from 'react-icons/fa'
// Type Animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'


const Banner = () => {
	return (
		<section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* Text */}
					<div className="flex-1 text-center font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
						>
							Yugendhar 
						</motion.h1>

						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="text-white mr-4">I am a</span>
							<TypeAnimation
								sequence={[
									'Digital Innovator: Web Development, Cyber Safety, & Marketing Expertise',
									2000,
									'Web Developer',
									2000,
									'Pentester',
									2000,
									'Cyber Security Specialist',
									2000,
									'UI/UX Designer',
									2000,
									'Digital Marketing Strategist',
									2000,
								]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>

						<motion.p
							variants={fadeIn('up', 0.5)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							 Cybersecurity Specialist & Penetration Tester | Full-Stack Web Developer & UI/UX Designer | Digital Marketing Strategist
	</motion.p>

						<motion.div
							variants={fadeIn('up', 0.6)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
                    <a href="/Yugendhar-CV.pdf" download className="btn btn-lg" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <FaArrowDown /> Download CV
                          </a>
							<a href="#contact" className="text-gradient btn-link">
								Contact Me
							</a>
						</motion.div>

						{/* Socials */}
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
						>
							<a href="https://www.linkedin.com/in/yugendhar-d/">
								<FaLinkedinIn />
							</a>

							<a href="https://github.com/Yugi71120">
								<FaGithub />
							</a>

							<a href="https://t.me/yugendhar_d/">
								<FaTelegram />
							</a>
							<a href="https://www.instagram.com/i_m_h_a_a_r_p/">
								<FaInstagram />
							</a>
						</motion.div>
					</div>

					{/* Image */}
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						whileInView={'show'}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
					>
						<img src={Image} alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
