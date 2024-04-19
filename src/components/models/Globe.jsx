import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  Points,
  PointMaterial,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion-3d';
import { useTransform, useScroll } from 'framer-motion';
import { Loader } from '../../components';

import model from '../../assets/models/globe.glb';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    setSphere(() => random.inSphere(new Float32Array(3000), { radius: 5 }));
    console.log(sphere);
  }, []);

  //   *AUTOMATIC ROTATION
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Planet = ({ scrollYProgress }) => {
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const planet = useGLTF(model);

  //   *SCROLL
  const scale = useTransform(scrollYProgress, [0.75, 1], [0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 1.5]);

  return (
    <motion.group
      transition={{ type: 'spring', stiffness: 700, damping: 35 }}
      //   animate={{ scale: [0, 1] }}
      scale={[scale, scale, scale]}
      rotation={[0, rotate, Math.PI / 4]}
    >
      <primitive
        object={planet.scene}
        scale={screenSize.width >= 700 ? 2.25 : 1.8}
        position-y={0}
        rotation-y={0}
      />
    </motion.group>
  );
};

const Globe = ({ scrollYProgress }) => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars />
        <Planet scrollYProgress={scrollYProgress} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Globe;
