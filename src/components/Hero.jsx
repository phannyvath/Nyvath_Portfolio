import React from 'react';
import { styles } from '../styles';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import HeroProfileCard from './canvas/HeroProfileCard';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-tertiary overflow-hidden">
      {/* 3D Profile Card */}
      <div className="w-full flex justify-center items-center mb-8" style={{ height: '400px', maxWidth: '350px' }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <OrbitControls enableZoom={false} />
          <HeroProfileCard />
          <Preload all />
        </Canvas>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center drop-shadow-lg">
        Hello, I'm Im Phannyvath, a Software Developer & Designer
      </h1>
      <p className="text-xl md:text-2xl text-secondary text-center mb-8 max-w-2xl">
        Student at Royal University of Phnom Penh | Passionate About Technology, Languages, and Creativity
      </p>
      {/* Optionally add animated floating icons or 3D shapes here */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 