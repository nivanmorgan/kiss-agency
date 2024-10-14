import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {
	Points,
	PointMaterial,
	Preload,
	OrbitControls,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion-3d';
import { useTransform, useScroll } from 'framer-motion';
import { Loader } from '../../components';

import face1 from '../../assets/textures/face-1.png';
import face2 from '../../assets/textures/face-2.png';
import face3 from '../../assets/textures/face-3.png';
import face4 from '../../assets/textures/face-4.png';
import face5 from '../../assets/textures/face-5.png';

const Cube = () => {
	const ref = useRef(null);
	// *LOGO CUBE
	const texture1 = useLoader(TextureLoader, face2);
	const texture2 = useLoader(TextureLoader, face3);
	const texture3 = useLoader(TextureLoader, face4);
	const texture4 = useLoader(TextureLoader, face5);
	const texture5 = useLoader(TextureLoader, face1);
	const texture6 = useLoader(TextureLoader, face1);
	//   *AUTHOMATIC ROTATION
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta * 0.25;
		// ref.current.rotation.y -= delta * 0.25;
		ref.current.rotation.z -= delta * 0.25;
	});

	return (
		<mesh ref={ref}>
			<boxGeometry args={[0.35, 0.35, 0.35]} />
			{/* <meshStandardMaterial color="white" /> */}
			<meshStandardMaterial map={texture1} attach="material-0" />
			<meshStandardMaterial map={texture2} attach="material-1" />
			<meshStandardMaterial map={texture3} attach="material-2" />
			<meshStandardMaterial map={texture4} attach="material-3" />
			<meshStandardMaterial map={texture5} attach="material-4" />
			<meshStandardMaterial map={texture6} attach="material-5" />
		</mesh>
	);
};

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
	const scale = useTransform(scrollY, [0, 2000], [1, 0.7]);
	const rotate = useTransform(scrollY, [0, 2000], [0, Math.PI]);

	// // *LOGO CUBE
	// const texture = useLoader(TextureLoader, logo);

	return (
		<motion.group
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 1] }}
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

			<Cube />
		</motion.group>
	);
};

const Cubes = ({ loader }) => {
	return (
		<div className={loader ? 'w-full h-full' : 'w-full h-[80vh]'}>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<OrbitControls
					//   autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<ambientLight intensity={1} />
				<directionalLight position={[1, 1, 1]} intensity={5} />
				<Suspense fallback={<Loader />}>
					<Stars />
					{/* <Cube /> */}
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default Cubes;
