import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ProfileCard = () => {
  const cubeRef = useRef();
  const [hue, setHue] = useState(260);

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta;
      cubeRef.current.rotation.y += delta;
      // Animate hue for gradient effect
      const newHue = (hue + delta * 30) % 360;
      setHue(newHue);
      const color = new THREE.Color(`hsl(${newHue}, 80%, 55%)`);
      cubeRef.current.material.color = color;
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial
        color={new THREE.Color(`hsl(${hue}, 80%, 55%)`)}
        roughness={0.3}
        metalness={0.7}
        clearcoat={0.5}
        reflectivity={0.5}
      />
    </mesh>
  );
};

export default ProfileCard; 