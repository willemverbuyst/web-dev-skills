import React from 'react';
import { Html} from '@react-three/drei';
import angularImg from '../img/angular.png';

export default function AngularLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5}>
        <div class="tooltip">
          <img src={angularImg} alt="chart-js"/>
          <span class="tooltiptext">Angular</span>
        </div>
      </Html>
    </mesh>
  );
}
