import React from 'react';
import { styles } from '../styles';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import HeroProfileCard from './canvas/HeroProfileCard';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-tertiary overflow-hidden px-4 sm:px-0">
      {/* 3D Profile Card */}
      <div className="w-full flex justify-center items-center mb-6 sm:mb-8" style={{ height: '420px', maxWidth: '100%', minWidth: '0' }}>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl" style={{ height: '420px' }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <OrbitControls enableZoom={false} />
            <HeroProfileCard />
            <Preload all />
          </Canvas>
        </div>
      </div>
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 text-center drop-shadow-lg leading-tight">
        Hello, I'm Im Phannyvath, a Software Developer & Designer
      </h1>
      <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-secondary text-center mb-6 sm:mb-8 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
        Student at Royal University of Phnom Penh | Passionate About Technology, Languages, and Creativity
      </p>
      {/* Optionally add animated floating icons or 3D shapes here */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[48px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 