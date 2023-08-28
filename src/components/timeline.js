// import React from 'react';
// import './timeline.css'; // Make sure to have this CSS file in the same directory

// const Timeline = () => {
//   return (
//     <div>
//       <h1><a href="" download className="btn btn-lg" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//                        Education
//                           </a></h1>
//       <ul>
//         <li style={{ '--accent-color': '#41516C' }}>
//           <div className="date">2002</div>
//           <div className="title">Title 1</div>
//           <div className="descr">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
//             itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
//             consequatur laboriosam!
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#FBCA3E' }}>
//           <div className="date">2007</div>
//           <div className="title">Title 2</div>
//           <div className="descr">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
//             adipisci nobis nostrum vero nihil veniam.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#E24A68' }}>
//           <div className="date">2012</div>
//           <div className="title">Title 3</div>
//           <div className="descr">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
//             minima consequuntur soluta placeat iure totam commodi repellendus
//             ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum
//             saepe nulla hic.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#1B5F8C' }}>
//           <div className="date">2017</div>
//           <div className="title">Title 4</div>
//           <div className="descr">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
//             cumque.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#4CADAD' }}>
//           <div className="date">2022</div>
//           <div className="title">Title 5</div>
//           <div className="descr">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
//           </div>
//         </li>
//       </ul>
//       <div className="credits">
      
//       </div>
//       <h1><a href="" download className="btn btn-lg" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//                        Experience
//                           </a></h1>
//       <ul>
//         <li style={{ '--accent-color': '#41516C' }}>
//           <div className="date">2002</div>
//           <div className="title">Title 1</div>
//           <div className="descr">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
//             itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
//             consequatur laboriosam!
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#FBCA3E' }}>
//           <div className="date">2007</div>
//           <div className="title">Title 2</div>
//           <div className="descr">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
//             adipisci nobis nostrum vero nihil veniam.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#E24A68' }}>
//           <div className="date">2012</div>
//           <div className="title">Title 3</div>
//           <div className="descr">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
//             minima consequuntur soluta placeat iure totam commodi repellendus
//             ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum
//             saepe nulla hic.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#1B5F8C' }}>
//           <div className="date">2017</div>
//           <div className="title">Title 4</div>
//           <div className="descr">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
//             cumque.
//           </div>
//         </li>
//         <li style={{ '--accent-color': '#4CADAD' }}>
//           <div className="date">2022</div>
//           <div className="title">Title 5</div>
//           <div className="descr">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Timeline;
import React, { useState } from 'react';
import './timeline.css'; // Make sure to have this CSS file in the same directory

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('education'); // State to track active tab

  const handleTabClick = (tab, event) => {
    event.preventDefault(); // Prevent page refresh
    setActiveTab(tab);
  };

  const educationTimelineItems = [
    {
      date: '2018 - 2020',
      title: 'Secondary and postsecondary education',
      description: 'From 2018 to 2020, I completed my academic foundation at Lords Park Matric Higher Secondary School. These years were instrumental in cultivating my learning mindset, fostering essential skills, and nurturing my curiosity. The supportive community and comprehensive curriculum propelled me toward a path of knowledge and personal growth, setting the stage for my future endeavors.',
    },
    {
        date: '2020 - 2023',
        title: "Bachelor's Journey in Digital and Cyber Forensic Science",
        description: 'Embarking on a transformative journey at Rathinam College, I attained my BSc. degree in Digital and Cyber Forensic Science. From 2020 to 2023, I immersed myself in cutting-edge coursework, mastering the intricacies of digital investigations. The program equipped me with advanced skills in data analysis, cyber defense, and ethical hacking, setting the stage for a dynamic career in the realm of cybersecurity.',
      },
     
    // Add more education timeline items...
  ];

  const experienceTimelineItems = [
    {
        date: '2022',
        title: 'Ethical Hacking Intern',
        description: "Gained hands-on experience in real-world ethical hacking techniques and tools. Worked on various penetration testing assignments and projects, including vulnerability scanning and exploitation, social engineering, and web application testing. Conducted research and testing on new and emerging security threats and vulnerabilities",
      },
      {
          date: '2023',
          title: 'Vulnerability Assessment and Penetration Testing (VAPT) Intern',
          description: 'Conducted reconnaissance tasks on websites and applications belonging to the power, finance, and aviation industries. Performed vulnerability assessments and penetration testing to identify security weaknesses and potential attack vectors. Generated detailed reports on findings and submitted them to the team leader.',
        },
        {
          date: '2023',
          title: 'Web Development',
          description: "Developed a dynamic and user-friendly website, enabling users to plan their itineraries, book accommodations, and explore popular tourist attractions. Collaborated closely with the client to understand their requirements, design the website layout, and implement intuitive features. Completed the project within the agreed timeline and received positive feedback from the client on the website's aesthetics and functionality.",
        },
     
    // Add more experience timeline items...
  ];

  const renderTimelineItems = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ '--accent-color': '#41516C' }}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.description}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (<div className="timeline-container">
  <div className="btn-group">
      <a
          href="#"
          onClick={(event) => handleTabClick('education', event)}
          className={`custom-button btn btn-lg ${
              activeTab === 'education' ? 'active' : ''
          }`}
      >
          Education
      </a>
      <a
          href="#"
          onClick={(event) => handleTabClick('experience', event)}
          className={`custom-button btn btn-lg ${
              activeTab === 'experience' ? 'active' : ''
          }`}
      >
          Experience
      </a>
  </div>



      <div className="timeline-content">
        {activeTab === 'education' ? renderTimelineItems(educationTimelineItems) : null}
        {activeTab === 'experience' ? renderTimelineItems(experienceTimelineItems) : null}
      </div>
    </div>
  );
};

export default Timeline;


