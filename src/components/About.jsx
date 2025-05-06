import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const education = [
  {
    icon: '🎓',
    title: 'Royal University of Phnom Penh',
    subtitle: 'Bachelor in Information Technology',
    flag: '🇰🇭',
  },
  {
    icon: '🇬🇧',
    title: 'ACE (Australian Centre for Education)',
    subtitle: 'English Learning Experience',
    flag: '🇺🇸',
  },
  {
    icon: '🇬🇧',
    title: 'Aii Language Center',
    subtitle: 'English Learning Experience',
    flag: '🇺🇸',
  },
  {
    icon: '🇨🇳',
    title: 'Harbin Institute of Technology',
    subtitle: 'Studied Chinese',
    flag: '🇨🇳',
  },
];

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Education & Languages</h2>
      </motion.div>
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.title}
              variants={fadeIn('up', 'spring', idx * 0.2, 0.75)}
              className="relative bg-white/10 backdrop-blur-lg border border-violet-400/30 rounded-3xl p-10 shadow-2xl flex flex-col items-center min-w-[260px] max-w-xs mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-violet-500/30 hover:border-violet-400 group"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 to-indigo-400 shadow-lg mb-6 border-4 border-white/20 text-5xl">
                {edu.flag}
              </div>
              <h3 className="text-xl font-extrabold text-white text-center mb-2 group-hover:text-violet-200 transition-colors duration-200">{edu.title}</h3>
              <p className="text-secondary text-center mb-2 text-base font-medium">{edu.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center text-white">
        <strong>Languages:</strong> Khmer (native), English (proficient), Chinese (intermediate)
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about"); 