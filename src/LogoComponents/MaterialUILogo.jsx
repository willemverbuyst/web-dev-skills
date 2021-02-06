import React from 'react';
import { Html} from '@react-three/drei';
import materialUiImg from '../img/material-ui.png';

export default function MaterialUILogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={materialUiImg} alt="css"/>
          <span class="tooltiptext">MaterialUI</span>
        </div>
      </Html>
    </mesh>
  );
}