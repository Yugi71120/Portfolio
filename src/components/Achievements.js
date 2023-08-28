import React from 'react';
import './Achievements.css'; // Import your new Achievements.css file
import AchievementLogo from '../assets/React.png'; // Import your achievement logo here

const Achievements = () => {
    return (
        <section className="section" id="achievements">
            <div className="container mx-auto">
                <div className="skills-section">
                    <h2>My Achievements</h2>
                    <button className="btn btn-lg">View All Achievements</button>
                </div>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='group'>
                        {/* Overlay */}
                        <div className='group-hover-bg'></div>
                        {/* Logo */}
                        <img
                            className='group-hover-logo'
                            src={AchievementLogo}
                            alt="Achievement Logo"
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='group'>
                        {/* Overlay */}
                        <div className='group-hover-bg'></div>
                        {/* Logo */}
                        <img
                            className='group-hover-logo'
                            src={AchievementLogo}
                            alt="Achievement Logo"
                        />
                    </div>
                </div>
                  <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='group'>
                        {/* Overlay */}
                        <div className='group-hover-bg'></div>
                        {/* Logo */}
                        <img
                            className='group-hover-logo'
                            src={AchievementLogo}
                            alt="Achievement Logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
