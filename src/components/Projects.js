import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img2 from '../assets/project2.png';
import Img3 from '../assets/project4.png';

const projectsData = [
    {
        title: "Tour Guide Website",
        pretitle: "Munnar Expeditions",
        image: Img2,
        link: "https://munnarexpeditions.in/",
        categories: ["web"]
    },
    {
        title: "Remote access to a target machine",
        pretitle: "Python Backdoor",
        image: Img3,
        link: "https://github.com/Yugi71120/python-backdoor.git",
        categories: ["hacking"]
    },
    // ... Add more projects with appropriate data and categories
];

const Project = () => {
    const [filter, setFilter] = useState('all');

    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                {/* Filter buttons */}
                <div className="project-filter mb-4">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('web')}>Web</button>
                    <button onClick={() => setFilter('hacking')}>Hacking</button>
                    {/* Add more filter buttons as needed */}
                </div>

                <div className='flex flex-col lg:flex-row gap-x-10'>
                    {projectsData
                        .filter(project => filter === 'all' || project.categories.includes(filter))
                        .map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className='flex-1 flex flex-col gap-y-10'
                            >
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
