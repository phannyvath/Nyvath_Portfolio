import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import ProfileCard from './canvas/ProfileCard';

const experiences = [
  {
    icon: '/image/workplace1.gif',
    company: 'E&A Consultant Co., Ltd',
    role: 'Web Developer & Graphic Designer',
    date: 'June 2024 – Sep 2024',
    tasks: [
      'Developed company website',
      'Designed posters',
      'Worked with React, Next.js, Illustrator, Canva',
      'Traveled for environmental fieldwork',
    ],
  },
  {
    icon: '/image/workplace2.png',
    company: 'OOne Power Technology Co., Ltd',
    role: 'Software Developer & Project Analyst',
    date: 'Sep 2024 – Present',
    tasks: [
      'Frontend development',
      'Project analysis',
      'Collaborating with tech teams',
    ],
  },
];

const Experience = () => (
  <section className="py-16 px-4 md:px-16 bg-black-200 rounded-2xl shadow-lg">
    {/* 3D Canvas Section */}
    <div className="w-full h-64 mb-10 rounded-xl overflow-hidden bg-black flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <ProfileCard />
        <Preload all />
      </Canvas>
    </div>
    <h2 className={styles.sectionHeadText + ' text-center mb-10'}>Experience</h2>
    <div className="flex flex-col gap-10 items-center">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          variants={fadeIn('up', 'spring', idx * 0.2, 0.75)}
          className="bg-tertiary rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8 min-w-[320px] max-w-2xl w-full animate-fade-in border border-black-100"
        >
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md mb-4 md:mb-0 overflow-hidden">
            <img
              src={exp.icon}
              alt={exp.company + ' logo'}
              className="w-full h-full object-contain"
              style={{ background: 'white' }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
            <p className="text-secondary mb-2">{exp.role} <span className="text-xs text-white-100 ml-2">({exp.date})</span></p>
            <ul className="list-disc ml-5 mt-2 text-white text-base space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SectionWrapper(Experience, "experience"); 