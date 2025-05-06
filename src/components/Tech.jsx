import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiAdobeillustrator, SiCanva } from 'react-icons/si';

const skills = [
  { category: 'Development', items: [
    { name: 'React.js', icon: <FaReact color="#61DBFB" size={40} /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#fff" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#3C873A" size={40} /> },
    { name: 'Express', icon: <SiExpress color="#fff" size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={40} /> },
  ]},
  { category: 'Frontend', items: [
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38BDF8" size={40} /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={40} /> },
  ]},
  { category: 'Design', items: [
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator color="#FF9A00" size={40} /> },
    { name: 'Canva', icon: <SiCanva color="#00C4CC" size={40} /> },
    { name: 'Figma', icon: <FaFigma color="#A259FF" size={40} /> },
  ]},
  { category: 'Languages', items: [
    { name: 'English', icon: <span className="text-2xl font-bold">GB</span> },
    { name: 'Chinese', icon: <span className="text-2xl font-bold">CN</span> },
    { name: 'Khmer', icon: <span className="text-2xl font-bold">KH</span> },
  ]},
];

const Tech = () => (
  <section className="py-16 px-4 md:px-16">
    <h2 className={styles.sectionHeadText + ' text-center mb-10'}>Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-xl font-bold text-white mb-4">{group.category}</h3>
          <div className="flex flex-wrap gap-4">
            {group.items.map((skill) => (
              <Tilt key={skill.name} className="w-[120px]">
                <div className="bg-tertiary rounded-xl p-4 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-white text-center text-sm">{skill.name}</span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionWrapper(Tech, "tech"); 