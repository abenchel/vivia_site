import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Crystal({ position, scale = 1, color = "#a855f7" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.1}
          roughness={0.2}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, scale = 0.3, color = "#a855f7" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function Pyramid({ position, scale = 1, color = "#a855f7" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[1, 1.5, 4]} />
      <MeshDistortMaterial
        color={color}
        speed={1.5}
        distort={0.05}
        roughness={0.15}
        metalness={0.95}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" angle={0.3} />
        
        {/* Main Crystal */}
        <Crystal position={[3, 0, 0]} scale={1.5} color="#a855f7" />
        
        {/* Inverted Pyramid below */}
        <group position={[3, -1.8, 0]} rotation={[Math.PI, 0, 0]}>
          <Pyramid position={[0, 0, 0]} scale={0.8} color="#7c3aed" />
        </group>
        
        {/* Floating spheres */}
        <FloatingSphere position={[2, 1.5, -1]} scale={0.15} color="#a855f7" />
        <FloatingSphere position={[4.5, -0.5, 0.5]} scale={0.1} color="#00f0ff" />
        <FloatingSphere position={[1.5, -1, 1]} scale={0.08} color="#c026d3" />
        
        {/* Small decorative crystals */}
        <Crystal position={[-4, 2, -2]} scale={0.4} color="#00f0ff" />
        <Crystal position={[-3, -2, -1]} scale={0.3} color="#c026d3" />
      </Canvas>
    </div>
  );
}