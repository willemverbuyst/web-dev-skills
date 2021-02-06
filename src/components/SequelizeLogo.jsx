import React from 'react';
import { Html} from '@react-three/drei';
import sequelizeImg from '../img/sequelize.png';

export default function SequelizeLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={sequelizeImg} alt="css"/>
          <span class="tooltiptext">Sequelize</span>
        </div>
      </Html>
    </mesh>
  );
}