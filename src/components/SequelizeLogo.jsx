import { Html } from "@react-three/drei";
import sequelizeL from "../img/sequelize.png";

export default function SequelizeLogo(props) {
  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={sequelizeL} alt="sequelize" />
      </Html>
    </mesh>
  );
}
