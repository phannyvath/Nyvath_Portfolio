import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ProfileCard = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta;
      cubeRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4B0082" />
    </mesh>
  );
};

export default ProfileCard; 