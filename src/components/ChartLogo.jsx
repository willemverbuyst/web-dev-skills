import { Html } from "@react-three/drei";
import chartL from "../img/chart-js.png";

export default function ChartLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={chartL} alt="chart-js" />
      </Html>
    </mesh>
  );
}
