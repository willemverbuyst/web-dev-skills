import { Html } from "@react-three/drei";
import htmlL from "../img/html.png";

export default function HtmlLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={htmlL} alt="html" />
      </Html>
    </mesh>
  );
}
