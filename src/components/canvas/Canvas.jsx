import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Html } from '@react-three/drei';
import Background from './Background';
import ProfileCard from './ProfileCard';

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

const Canvas3D = () => {
  return (
    <div className="w-full h-screen absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Background />
          <ProfileCard />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Canvas3D; 