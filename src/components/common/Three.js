import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./Model";

export default function Three() {
  const ref = useRef();
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} contactShadowBlur={6}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate makeDefault />
    </Canvas>
  );
}
