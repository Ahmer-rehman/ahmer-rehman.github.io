import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Float,
  Torus,
  Icosahedron,
  Sparkles,
} from "@react-three/drei";

function DistortedOrb() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.18;
    const { x, y } = state.pointer;
    mesh.current.rotation.x += (y * 0.35 - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.z += (x * 0.25 - mesh.current.rotation.z) * 0.05;
  });

  return (
    <mesh ref={mesh} scale={1.25}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={0.55}
        distort={0.42}
        speed={2.4}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

/** glowing rotating wireframe cage around the orb */
function WireShell() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = -t * 0.12;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.25;
  });
  return (
    <Icosahedron ref={ref} args={[1.85, 1]}>
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.14} />
    </Icosahedron>
  );
}

function OrbitRing({ radius, speed, tilt, color, tube = 0.02 }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.z = state.clock.getElapsedTime() * speed;
  });
  return (
    <group rotation={tilt}>
      <Torus ref={ref} args={[radius, tube, 16, 140]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.8}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </Torus>
    </group>
  );
}

function Satellite({ radius, speed, color, offset = 0, size = 0.1 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.35,
      Math.sin(t) * radius * 0.6
    );
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 0.7;
  });
  return (
    <Icosahedron ref={ref} args={[size, 0]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={3.5}
        toneMapped={false}
      />
    </Icosahedron>
  );
}

export default function HeroOrb() {
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
      <group>
        <DistortedOrb />
        <WireShell />

        {/* magical particle dust around the orb */}
        <Sparkles count={40} scale={5.5} size={3.5} speed={0.45} color="#a78bfa" />
        <Sparkles count={25} scale={4.5} size={2.5} speed={0.3} color="#22d3ee" />

        <OrbitRing radius={2.0} speed={0.45} tilt={[Math.PI / 2.4, 0.3, 0]} color="#22d3ee" />
        <OrbitRing radius={2.4} speed={-0.3} tilt={[Math.PI / 1.9, -0.4, 0.2]} color="#a78bfa" />
        <OrbitRing radius={2.75} speed={0.18} tilt={[Math.PI / 2.1, 0.15, -0.3]} color="#f472b6" tube={0.012} />

        <Satellite radius={2.15} speed={0.6} color="#f472b6" />
        <Satellite radius={2.55} speed={-0.45} color="#22d3ee" offset={2} size={0.12} />
        <Satellite radius={1.95} speed={0.8} color="#a78bfa" offset={4} size={0.08} />
      </group>
    </Float>
  );
}
