import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <section id={idName} className="max-w-7xl mx-auto relative z-0 px-6 sm:px-16 py-10">
      <Component />
    </section>
  );
};
export default SectionWrapper; 