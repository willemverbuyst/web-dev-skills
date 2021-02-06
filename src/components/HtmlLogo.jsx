import React from 'react';
import { Html} from '@react-three/drei';
import htmlImg from '../img/html.png';

export default function HtmlLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={htmlImg} alt="css"/>
          <span class="tooltiptext">HTML5</span>
        </div>
      </Html>
    </mesh>
  );
}