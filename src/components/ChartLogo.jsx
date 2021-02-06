import React from 'react';
import { Html} from '@react-three/drei';
import chartImg from '../img/chart-js.png';

export default function ChartLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5}>
        <div class="tooltip">
          <img src={chartImg} alt="chart-js"/>
          <span class="tooltiptext">chartjs</span>
        </div>
      </Html>
    </mesh>
  );
}
