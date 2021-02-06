import React from 'react';
import { Html} from '@react-three/drei';
import cssImg from '../img/css.png';

export default function ChartLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5}>
        <a href="https://www.chartjs.org/">
          <img src={cssImg} alt="css" target="_blank"/>
        </a>
      </Html>
    </mesh>
  );
}
