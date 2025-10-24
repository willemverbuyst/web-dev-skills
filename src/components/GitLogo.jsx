import { Html } from "@react-three/drei";
import gitL from "../img/git.png";

export default function GitLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={gitL} alt="git" />
      </Html>
    </mesh>
  );
}
