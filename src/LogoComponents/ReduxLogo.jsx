import React from 'react';
import { Html} from '@react-three/drei';
import reduxImg from '../img/redux.png';

export default function ReduxLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={reduxImg} alt="css"/>
          <span class="tooltiptext">Redux</span>
        </div>
      </Html>
    </mesh>
  );
}