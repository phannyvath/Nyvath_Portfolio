import { Image, Text } from '@react-three/drei';

const CARD_WIDTH = 2.8;
const CARD_HEIGHT = 4.2;
const CARD_DEPTH = 0.1;

const HeroProfileCard = () => {
  return (
    <group>
      {/* Card Base with Purple Background */}
      <mesh>
        <boxGeometry args={[CARD_WIDTH, CARD_HEIGHT, CARD_DEPTH]} />
        <meshStandardMaterial color="#a259ff" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Top Banner */}
      <mesh position={[0, CARD_HEIGHT / 2 - 0.35, 0.06]}>
        <planeGeometry args={[CARD_WIDTH, 0.6]} />
        <meshStandardMaterial color="#7e3ff2" />
      </mesh>

      {/* Full Name */}
      <Text
        position={[0, CARD_HEIGHT / 2 - 0.4, 0.07]}
        fontSize={0.22}
        anchorX="center"
        anchorY="middle"
        color="#fff"
        fontWeight={800}
        maxWidth={2.4}
      >
        Im Phannyvath
      </Text>

      {/* Profile Picture */}
      <Image
        url="/image/profile.jpg"
        scale={[1, 1, 1]}
        position={[0, 1.0, 0.07]}
        toneMapped={false}
        transparent
        borderRadius={2}
      />

      {/* Job Title */}
      <Text
        position={[0, 0.4, 0.07]}
        fontSize={0.15}
        anchorX="center"
        anchorY="middle"
        color="#fff"
        maxWidth={2.4}
      >
       Developer,Designer
      </Text>

      {/* Company */}
      <Text
        position={[0, 0.15, 0.07]}
        fontSize={0.12}
        anchorX="center"
        anchorY="middle"
        color="#e0d6f7"
        maxWidth={2.4}
      >
        Awesome Tech Solutions
      </Text>

      {/* Divider */}
      <mesh position={[0, -0.1, 0.07]}>
        <planeGeometry args={[CARD_WIDTH * 0.65, 0.006]} />
        <meshStandardMaterial color="#fff" />
      </mesh>

      {/* Email Icon Placeholder */}
      <Text
        position={[-1.1, -0.35, 0.07]}
        fontSize={0.1}
        anchorX="left"
        anchorY="middle"
        color="#ffffff"
        maxWidth={2.2}
      >
        📧 nyvathnyvath@gmail.com
      </Text>

      {/* Phone Icon Placeholder */}
      <Text
        position={[-1.1, -0.6, 0.07]}
        fontSize={0.1}
        anchorX="left"
        anchorY="middle"
        color="#ffffff"
        maxWidth={2.2}
      >
        📞 071 556 267 8
      </Text>

      {/* QR Code */}
      <Image
        url="/image/Qrcode.jpeg"
        scale={[0.8, 0.8, 1]}
        position={[0, -1.1, 0.07]}
        toneMapped={false}
        transparent
      />
      <Text
        position={[0, -1.6, 0.07]}
        fontSize={0.1}
        anchorX="center"
        anchorY="middle"
        color="#e0d6f7"
        maxWidth={2.2}
      >
        Scan to Verify ID
      </Text>

      {/* Bottom Accent */}
      <mesh position={[0, -CARD_HEIGHT / 2 + 0.2, 0.06]}>
        <planeGeometry args={[CARD_WIDTH, 0.3]} />
        <meshStandardMaterial color="#7e3ff2" />
      </mesh>
    </group>
  );
};

export default HeroProfileCard;
