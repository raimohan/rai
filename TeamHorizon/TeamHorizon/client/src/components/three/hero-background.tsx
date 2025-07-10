import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const positions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8B5CF6"
        size={2}
        transparent
        opacity={0.8}
        sizeAttenuation={false}
      />
    </points>
  );
}

function LightBeam() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
      const material = ref.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <cylinderGeometry args={[0.1, 2, 20, 8]} />
      <meshBasicMaterial color="#6366F1" transparent opacity={0.4} />
    </mesh>
  );
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orb1.current) {
      orb1.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
      orb1.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 3;
    }
    if (orb2.current) {
      orb2.current.position.y = Math.cos(state.clock.elapsedTime * 1.2) * 1.5;
      orb2.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 4;
    }
    if (orb3.current) {
      orb3.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 2.5;
      orb3.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <>
      <mesh ref={orb1} position={[-5, 0, -2]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.4} />
      </mesh>
      <mesh ref={orb2} position={[5, 2, -3]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#6366F1" transparent opacity={0.3} />
      </mesh>
      <mesh ref={orb3} position={[0, -3, -1]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.5} />
      </mesh>
    </>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366F1" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8B5CF6" />
        
        <StarField />
        <LightBeam />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
