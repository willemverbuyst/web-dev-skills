import React from 'react';
import { Html} from '@react-three/drei';
import jsImg from '../img/js.png';

export default function JsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={jsImg} alt="css"/>
          <span class="tooltiptext">JavaScript</span>
        </div>
      </Html>
    </mesh>
  );
}