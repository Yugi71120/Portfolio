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
      date: '2002',
      title: 'Education Title 1',
      description: 'Lorem ipsum, dolor sit amet..The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil.',
    },
    {
        date: '2002',
        title: 'Education Title 1',
        description: 'Lorem ipsum, dolor sit amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
      },
      {
        date: '2002',
        title: 'Education Title 1',
        description: 'Lorem ipsum, dolor sit amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
      },
    {
      date: '2007',
      title: 'Education Title 2',
      description: 'Lorem ipsum dolor sit, amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
    },
    // Add more education timeline items...
  ];

  const experienceTimelineItems = [
    {
        date: '2002222',
        title: 'Education Title 1',
        description: 'Lorem ipsum, dolor sit amet..The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil.',
      },
      {
          date: '2002',
          title: 'Education Title 1',
          description: 'Lorem ipsum, dolor sit amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
        },
        {
          date: '2002',
          title: 'Education Title 1',
          description: 'Lorem ipsum, dolor sit amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
        },
      {
        date: '2007',
        title: 'Education Title 2',
        description: 'Lorem ipsum dolor sit, amet...The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but stil',
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


