import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion-3d';
import { useTransform, useScroll } from 'framer-motion';

const Stars = (props) => {
  const ref = useRef();
  // const [sphere] = useState(() =>
  // 	random.inSphere(new Float32Array(3000), { radius: 1.2 })
  // );
  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    setSphere(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }));
    console.log(sphere);
  }, []);

  //   *AUTHOMATIC ROTATION
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  //   *SCROLL
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [0.5, 1]);
  const rotate = useTransform(scrollY, [0, 700], [0, Math.PI]);

  return (
    <motion.group
      transition={{ type: 'spring', stiffness: 700, damping: 35 }}
      animate={{ scale: [0, 0.5] }}
      scale={[scale, scale, scale]}
      rotation={[0, rotate, Math.PI / 4]}
    >
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </motion.group>
  );
};

const Cubes = () => {
  return (
    <div className="w-full h-[80vh]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <OrbitControls
          //   autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default Cubes;
