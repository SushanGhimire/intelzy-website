import { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { FaMapMarkerAlt } from "react-icons/fa";

// Let's make the marker into a component so that we can abstract some shared logic
function Marker({ children, ...props }) {
  // This holds the visible state
  const [hidden, set] = useState();
  return (
    <Html
      transform
      occlude
      // The <Html> component can tell us when something is occluded (or not)
      onOcclude={set}
      // We just interpolate the visible state into css opacity and transforms
      style={{
        transition: "all 0.2s",
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0.25 : 1})`,
      }}
      {...props}
    >
      {children}
    </Html>
  );
}

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.05]} scale={100}>
        <mesh
          geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
          material={materials.Lampd_Ice}
        />
        <mesh
          onPointerOver={(e) => e.stopPropagation()}
          geometry={nodes["URF-Height_watr_0"].geometry}
          material={materials.watr}
          material-roughness={0}
        />
        <mesh
          geometry={nodes["URF-Height_Lampd_0"].geometry}
          material={materials.Lampd}
          material-color="lightgreen"
        >
          <Marker rotation={[0, Math.PI / 2, 0]} position={[0, 1.3, 0]}>
            {/* Anything in here is regular HTML, these markers are from font-awesome */}
            {/* <FaMapMarkerAlt style={{ color: "orange" }} /> */}
          </Marker>
          <Marker
            rotation={[0, Math.PI / 2, Math.PI / 2]}
            position={[0, 0, 1.3]}
          >
            <FaMapMarkerAlt style={{ color: "#F8373F" }} />
          </Marker>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.gltf");
