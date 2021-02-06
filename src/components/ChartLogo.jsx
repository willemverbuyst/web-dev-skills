import React from 'react';
import { HTML } from 'drei';
import chartL from '../img/chart-js.png';

export default function ChartLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <a href="https://www.chartjs.org/">
          <img src={chartL} alt="chart-js" />
        </a>
      </HTML>
    </mesh>
  );
}
