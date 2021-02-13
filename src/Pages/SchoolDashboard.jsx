import * as THREE from 'three'
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader} from 'react-three-fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';

import imgDashboardOne from '../img/dashboard-3.png';
import imgDashboardTwo from '../img/dashboard-4.png';
import imgDashboardThree from '../img/dashboard-5.png';
import imgHexagonOne from '../img/hexagon-generator-1.png';
import imgHexagonTwo from '../img/hexagon-generator-2.png';
import imgHexagonThree from '../img/hexagon-generator-3.png';

function ProjectOne(meshProps) {
  const ref = useRef();
  const texture1 = useLoader(THREE.TextureLoader, imgDashboardOne);
  const texture2 = useLoader(THREE.TextureLoader, imgDashboardTwo);
  const texture3 = useLoader(THREE.TextureLoader, imgDashboardThree);

  useFrame(
    () => (
      (ref.current.rotation.z += 0.004),
      (ref.current.rotation.x += 0.005),
      (ref.current.rotation.y += 0.003)
    )
  );

  return (
    <>
      <mesh ref={ref}>
        <Box position={[0, 0, 0]} args={[2, 2, 2]} {...meshProps}>
          <meshStandardMaterial map={texture1} attachArray="material" />
          <meshStandardMaterial map={texture2} attachArray="material" />
          <meshStandardMaterial map={texture3} attachArray="material" />
          <meshStandardMaterial map={texture2} attachArray="material" />
          <meshStandardMaterial map={texture1} attachArray="material" />
          <meshStandardMaterial map={texture3} attachArray="material" />
        </Box>
      </mesh>
    </>
  );
}

// function ProjectTwo(meshProps) {
//   const ref = useRef();
//   const texture1 = useLoader(THREE.TextureLoader, imgHexagonOne);
//   const texture2 = useLoader(THREE.TextureLoader, imgHexagonTwo);
//   const texture3 = useLoader(THREE.TextureLoader, imgHexagonThree);

//   useFrame(
//     () => (
//       (ref.current.rotation.z += 0.0),
//       (ref.current.rotation.x += 0.005),
//       (ref.current.rotation.y += 0.0)
//     )
//   );

//   return (
//     <>
//       <mesh ref={ref}>
//         <Box position={[-2, -2, 0]} args={[1, 1, 1]} {...meshProps}>
//           <meshStandardMaterial map={texture1} attachArray="material" />
//           <meshStandardMaterial map={texture2} attachArray="material" />
//           <meshStandardMaterial map={texture3} attachArray="material" />
//           <meshStandardMaterial map={texture2} attachArray="material" />
//           <meshStandardMaterial map={texture1} attachArray="material" />
//           <meshStandardMaterial map={texture3} attachArray="material" />
//         </Box>
//       </mesh>
//     </>
//   );
// }

export default function SchoolDashboard() {
  return (
    <div className="canvas-container">
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <ProjectOne />
        </Suspense>
      </Canvas>
    </div>
  )
};