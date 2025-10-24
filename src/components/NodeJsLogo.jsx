import { Html } from "@react-three/drei";
import nodeL from "../img/node-js.png";

export default function NodeJsLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={nodeL} alt="node-js" />
      </Html>
    </mesh>
  );
}
