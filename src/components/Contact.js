import React from 'react';
// Motion
import { motion } from 'framer-motion'
// Variants
import { fadeIn } from '../variants'
import { FaGithub, FaYoutube, FaDribbble, FaLinkedinIn, FaInstagram, FaTelegram, FaArrowDown, FaDownload} from 'react-icons/fa'


const Contact = () => {
	return (
		<section className="py-16 lg:section" id="contact">
			<div className="container mx-auto">
				<div className='flex flex-col lg:flex-row'>
					{/* Text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 flex justify-start items-center'
					>
						<div>
							<h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
								Get in touch
							</h4>
							<h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
								Let's work <br />
								together!
							</h2><motion.div
  variants={fadeIn('up', 0.7)}
  initial="hidden"
  whileInView={'show'}
  viewport={{ once: false, amount: 0.7 }}
  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-10" /* Added margin-bottom */
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
					</motion.div>

					{/* Form */}
					<motion.form
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
						action="https://formspree.io/f/xleybzzr" /* Replace with your Formspree email */
						method="POST"
					>
						<input
							className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
							type="text"
							placeholder='Your name'
							name="name" /* Formspree name field */
						/>
						<input
							className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
							type="email"
							placeholder='Your email'
							name="email" /* Formspree email field */
						/>
						<textarea
							className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
							placeholder='Your message'
							name="message" /* Formspree message field */
						></textarea>
						<button type="submit" className='btn btn-lg'>Send message</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
