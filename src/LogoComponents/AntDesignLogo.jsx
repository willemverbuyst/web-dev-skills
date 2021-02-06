import React from 'react';
import { Html} from '@react-three/drei';
import antDesignImg from '../img/ant-design.png';

export default function AntDesignLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5}>
        <div class="tooltip">
          <img src={antDesignImg} alt="chart-js"/>
          <span class="tooltiptext">Ant Design</span>
        </div>
      </Html>
    </mesh>
  );
}
