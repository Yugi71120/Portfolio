// import React from 'react';
// import './Skills.css';

// const SkillBar = ({ skill, percentage }) => {
//     return (
//         <div className="skill-container">
//             <span className="skill-name">{skill}</span>
//             <div className="skill-bar">
//                 <div className="skill-level" style={{ width: percentage }}></div>
//             </div>
//         </div>
//     );
// }

// export const Skills = () => {
//     const skillList = [
//         { skill: 'JavaScript', percentage: '85%' },
//         { skill: 'React', percentage: '80%' },
//         { skill: 'Node.js', percentage: '70%' },
//         // Add more skills as needed
//     ];

//     return (
//         <div className="skills-section">
//             <h2>My Technical Skills</h2>
//             {skillList.map((item, index) => (
//                 <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
//             ))}
//         </div>
//     );
// };
// export default Skills;
import React from 'react';
import './Skills.css';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import JS from '../assets/js.png';
import Git from '../assets/git.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Bootstrap from '../assets/bootstrap.jpg';
import NODE from '../assets/nodejs.png';
import NPM from '../assets/npm.png';
import REACT from '../assets/React.png';
import Angular from '../assets/Angular.png'
import Ruby from '../assets/ruby.png'
import Sql from '../assets/mysql.png'
import php from '../assets/php.png'
import metasploit from '../assets/metsploit.png'
import nessus from '../assets/nessus.png'
import netcat from '../assets/netcat.png'
import wireshark from '../assets/wireshark.png'
import vscode from '../assets/vs.png'
import burpsuite from '../assets/burpsuite.png'
import scala from '../assets/scala.png'
import ettercap from '../assets/ettercap.png'
import openvas from '../assets/openvas.png'
import sqlinjection from '../assets/sqlinjection.png'
import snort from '../assets/snort.png'
import john from '../assets/johntheripper.png'
import linux from '../assets/linux.jpg'
import kali from '../assets/kali.png'
import eclipse from '../assets/eclipse.png'
import mongo from '../assets/mongo.png'
import android from '../assets/android.png'
import flutter from '../assets/flutter.png'




const SkillBar = ({ skill, percentage }) => {
    return (
        <div className="skill-container">
            <span className="skill-name">{skill}</span>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: percentage }}></div>
            </div>
        </div>
    );
}

const ProgrammingIcons = () => {
    const iconsList = [
          Html,
          Css,
          JS,
          Bootstrap,
          REACT,
          Python,
          Java,
          NODE,
          NPM,
          Git,
          php,
          scala,
          Ruby,
          Angular,
          Sql,
          vscode,
          eclipse,
          mongo,
          flutter,
          android,

          openvas,
          metasploit,
          wireshark,
          nessus,
          kali,
          john,
          linux,
          snort,
          sqlinjection,
          ettercap,
          burpsuite,
          netcat,

         

        // ... Add more imported icons as needed
    ];
    const rows = [];
    for (let i = 0; i < iconsList.length; i += 2) {
        rows.push(iconsList.slice(i, i + 2));
    }

    
    return (
        <div className="icons-section">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="icon-row">
                    {row.map((icon, iconIndex) => (
                        <img key={iconIndex} className="programming-icon" src={icon} alt={`Icon ${iconIndex}`} />
                    ))}
                </div>
            ))}
        </div>
    );
};
export const Skills = () => {
    const skillList = [
        { skill: 'Full Stack Development', percentage: '85%' },
        { skill: 'Cyber Security', percentage: '75%' },
        { skill: 'Web Pentesting', percentage: '70%' },
        { skill: 'Programming', percentage: '75%' },
        { skill: 'VAPT', percentage: '60%' },


        // Add more skills as needed
    ];

    return (
        <div className="skills-section">
            <h2>My Technical Skills</h2>
            {skillList.map((item, index) => (
                <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
            ))}
            <ProgrammingIcons />
        </div>
    );
};

export default Skills;
