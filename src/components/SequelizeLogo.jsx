import React from 'react';
import { HTML } from 'drei';
import sequelizeL from '../img/sequelize.png';

export default function SequelizeLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={sequelizeL} alt="sequelize" />
        <h2 style={{ fontSize: '3rem' }}>Sequelize</h2>
      </HTML>
    </mesh>
  );
}
