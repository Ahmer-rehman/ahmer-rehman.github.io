import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "./StarField";
import HeroOrb from "./HeroOrb";

function VisibleCanvas({ children, className, ...canvasProps }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Canvas frameloop={visible ? "always" : "never"} {...canvasProps}>
        {children}
      </Canvas>
    </div>
  );
}

/** Full-screen fixed background starfield rendered behind everything */
export function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <VisibleCanvas
        className="h-full w-full"
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </VisibleCanvas>
    </div>
  );
}

/** Interactive 3D orb used in the hero section */
export function OrbScene() {
  return (
    <VisibleCanvas
      className="h-full w-full"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#c4b5fd" />
      <pointLight position={[-5, -3, 3]} intensity={30} color="#22d3ee" />
      <pointLight position={[4, -4, -2]} intensity={20} color="#f472b6" />
      <pointLight position={[0, 4, 2]} intensity={18} color="#8b5cf6" />
      <Suspense fallback={null}>
        <HeroOrb />
      </Suspense>
    </VisibleCanvas>
  );
}
