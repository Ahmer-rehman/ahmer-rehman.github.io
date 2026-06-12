import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import HeroOrb from "./HeroOrb";

/** Full-screen fixed background starfield rendered behind everything */
export function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** Interactive 3D orb used in the hero section */
export function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#c4b5fd" />
      <pointLight position={[-5, -3, 3]} intensity={30} color="#22d3ee" />
      <pointLight position={[4, -4, -2]} intensity={20} color="#f472b6" />
      <pointLight position={[0, 4, 2]} intensity={18} color="#8b5cf6" />
      <Suspense fallback={null}>
        <HeroOrb />
      </Suspense>
    </Canvas>
  );
}
