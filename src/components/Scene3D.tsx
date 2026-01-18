import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// AI Core - Central glowing brain/sphere
function AICore({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        {/* Inner core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.8, 2]} />
          <MeshDistortMaterial
            color="#a855f7"
            speed={3}
            distort={0.3}
            roughness={0.2}
            metalness={0.8}
            emissive="#7c3aed"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Outer glow */}
        <mesh ref={glowRef} scale={1.3}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.15} />
        </mesh>
        {/* Orbital rings */}
        <Torus args={[1.2, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </Torus>
        <Torus args={[1.4, 0.015, 16, 100]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
        </Torus>
      </group>
    </Float>
  );
}

// Network Node - represents automation connection points
function NetworkNode({ 
  position, 
  color = "#00f0ff",
  size = 0.15 
}: { 
  position: [number, number, number]; 
  color?: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.03);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.2}
        metalness={0.5}
      />
    </mesh>
  );
}

// Connection Line between nodes - represents data flow
function ConnectionLine({ 
  start, 
  end, 
  color = "#00f0ff" 
}: { 
  start: [number, number, number]; 
  end: [number, number, number];
  color?: string;
}) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.5,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(20);
  }, [start, end]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 }))} />
  );
}

// Gear shape - represents automation
function AutomationGear({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const gearRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gearRef.current) {
      gearRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={gearRef} position={position} scale={scale}>
        {/* Gear body */}
        <Torus args={[0.4, 0.12, 6, 6]}>
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.9}
          />
        </Torus>
        {/* Inner circle */}
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Data Flow Particle
function DataParticle({ 
  startPos, 
  endPos, 
  delay = 0 
}: { 
  startPos: [number, number, number]; 
  endPos: [number, number, number];
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = ((state.clock.elapsedTime + delay) % 3) / 3;
      meshRef.current.position.x = startPos[0] + (endPos[0] - startPos[0]) * t;
      meshRef.current.position.y = startPos[1] + (endPos[1] - startPos[1]) * t + Math.sin(t * Math.PI) * 0.3;
      meshRef.current.position.z = startPos[2] + (endPos[2] - startPos[2]) * t;
      meshRef.current.scale.setScalar(0.05 + Math.sin(t * Math.PI) * 0.03);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00f0ff" />
    </mesh>
  );
}

// Workflow Arrow - represents process flow
function WorkflowArrow({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  const arrowRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (arrowRef.current) {
      arrowRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.4}>
      <group ref={arrowRef} position={position} rotation={[0, 0, rotation]}>
        <mesh>
          <coneGeometry args={[0.1, 0.25, 4]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.06, 0.2, 0.06]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene3D() {
  // Network nodes positions
  const nodes: [number, number, number][] = [
    [2.5, 1.5, 0],
    [4, 0.5, -0.5],
    [3.5, -1, 0.5],
    [1.5, -0.5, 0],
    [2, 0.5, 1],
  ];

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" angle={0.3} />
        
        {/* Central AI Core */}
        <AICore position={[3, 0, 0]} />
        
        {/* Automation Gears */}
        <AutomationGear position={[-3.5, 2, -2]} scale={0.8} />
        <AutomationGear position={[-4, -1.5, -1]} scale={0.5} />
        
        {/* Network Nodes */}
        {nodes.map((pos, i) => (
          <NetworkNode 
            key={i} 
            position={pos} 
            color={i % 2 === 0 ? "#00f0ff" : "#a855f7"}
            size={0.08 + (i * 0.02)}
          />
        ))}
        
        {/* Connection Lines */}
        <ConnectionLine start={nodes[0]} end={[3, 0, 0]} color="#00f0ff" />
        <ConnectionLine start={nodes[1]} end={[3, 0, 0]} color="#a855f7" />
        <ConnectionLine start={nodes[2]} end={[3, 0, 0]} color="#00f0ff" />
        <ConnectionLine start={nodes[3]} end={[3, 0, 0]} color="#a855f7" />
        <ConnectionLine start={nodes[4]} end={[3, 0, 0]} color="#00f0ff" />
        <ConnectionLine start={nodes[0]} end={nodes[1]} color="#00f0ff" />
        <ConnectionLine start={nodes[1]} end={nodes[2]} color="#a855f7" />
        
        {/* Data Flow Particles */}
        <DataParticle startPos={nodes[0]} endPos={[3, 0, 0]} delay={0} />
        <DataParticle startPos={nodes[1]} endPos={[3, 0, 0]} delay={1} />
        <DataParticle startPos={nodes[2]} endPos={[3, 0, 0]} delay={2} />
        <DataParticle startPos={nodes[3]} endPos={[3, 0, 0]} delay={0.5} />
        <DataParticle startPos={nodes[4]} endPos={[3, 0, 0]} delay={1.5} />
        
        {/* Workflow Arrows */}
        <WorkflowArrow position={[-2, 1, -1]} rotation={Math.PI / 4} />
        <WorkflowArrow position={[-1.5, -1.5, 0]} rotation={-Math.PI / 6} />
      </Canvas>
    </div>
  );
}