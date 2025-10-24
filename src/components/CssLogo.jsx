import { Html } from "@react-three/drei";
import cssL from "../img/css.png";

export default function CssLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={cssL} alt="css" />
      </Html>
    </mesh>
  );
}
