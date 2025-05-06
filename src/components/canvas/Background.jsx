import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Background = () => {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.1;
      sphereRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} scale={2.5}>
      <meshStandardMaterial
        color="#4B0082"
        wireframe
        transparent
        opacity={0.2}
      />
    </Sphere>
  );
};

export default Background; 