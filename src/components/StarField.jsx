import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Layer({ count, radius, color, size, xSpeed, ySpeed }) {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(count * 3), { radius }),
    [count, radius]
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * xSpeed;
    ref.current.rotation.y -= delta * ySpeed;
    const { x, y } = state.pointer;
    ref.current.position.x += (x * 0.18 - ref.current.position.x) * 0.02;
    ref.current.position.y += (y * 0.18 - ref.current.position.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function StarField() {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Layer count={1200} radius={1.6} color="#c4b5fd" size={0.0035} xSpeed={1 / 16} ySpeed={1 / 20} />
      <Layer count={500} radius={1.3} color="#67e8f9" size={0.0028} xSpeed={1 / 22} ySpeed={1 / 14} />
      <Layer count={150} radius={1.1} color="#f9a8d4" size={0.005} xSpeed={1 / 28} ySpeed={1 / 26} />
    </group>
  );
}
