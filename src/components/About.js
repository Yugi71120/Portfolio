import React from 'react';
// Countup
import CountUp from 'react-countup'
// Intersection observer
import { useInView } from 'react-intersection-observer'
// Motion
import { motion } from 'framer-motion'
// Variant
import { fadeIn } from '../variants'
// Icons
import { FaGithub, FaYoutube, FaDribbble, FaLinkedinIn, FaInstagram, FaTelegram, FaArrowDown, FaDownload, FaWhatsapp, } from 'react-icons/fa'



const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})

	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* Img */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
					></motion.div>

					{/* Text */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me.</h2>

						<h3 className="h3 mb-4">
					  I'm a Cybersecurity Specialist & Penetration Tester, Full-Stack Web Developer & UI/UX Designer, Digital Marketing Strategist

						</h3>

						<p className="mb-6">
						Hello! I'm Yugendhar, a BSc graduate in Digital and Cyber Forensic Science. My academic foundation has empowered me with robust skills in cybersecurity, particularly in vulnerability assessment and penetration testing. Alongside, I've honed my expertise in web development, seamlessly blending technical rigor with digital creativity. My passion lies in fortifying digital spaces and crafting seamless web experiences. Let's connect and innovate together.						</p>

						{/* Stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12">
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{
										inView
											? <CountUp stats={0} end={6} duration={3} />
											: null
									}
									+
								</div>

								<div className="font-primary text-sm tracking-[2px]">
									Months of <br />
									Experience
								</div>
							</div>

							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{
										inView
											? <CountUp stats={0} end={5} duration={3} />
											: null
									}
									+
								</div>

								<div className="font-primary text-sm tracking-[2px]">
									Projects <br />
									Completed
								</div>
							</div>

							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{
										inView
											? <CountUp stats={0} end={3} duration={3} />
											: null
									}
									{/* k+ */}
									+
								</div>

								<div className="font-primary text-sm tracking-[2px]">
									Satisfied <br />
									Clients
								</div>
							</div>
						</div>

						<div className="flex gap-x-8 items-center">
						<a href="#contact" className="btn btn-lg" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                       Hire Me
                          </a>
							<a href="#contact"   className="text-gradient btn-link">
				            Contact Me <FaWhatsapp />
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
		
	);
};

export default About;
