import React from 'react';
import { Html} from '@react-three/drei';
import parcelImg from '../img/parcel.png';

export default function ParcelLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <Html scaleFactor={2.5} >
        <div class="tooltip">
          <img src={parcelImg} alt="css"/>
          <span class="tooltiptext">Parcel</span>
        </div>
      </Html>
    </mesh>
  );
}