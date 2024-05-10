export const slideInRight = {
	initial: { opacity: 0, x: 25, scale: 1.1, y: -50 },
	animate: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	}),
};

export const slideInBottom = {
	initial: { opacity: 0, x: 10, y: 100 },
	animate: (i) => ({
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			delay: i * 0.2,
			type: 'spring',
			stiffness: 1000,
			damping: 385,
		},
	}),
};

export const fallDownVariant = {
	initial: { opacity: 0, x: 100, y: -100 },
	animate: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
};

export const drawVariant = {
	hidden: { pathLength: 0 },
	visible: (i) => {
		// const delay = 1 + i * 0.5;
		const delay = 0;
		return {
			pathLength: [0, 1],
			transition: {
				pathLength: {
					delay,
					type: 'tween',
					duration: 2,
					bounce: 0,
					repeat: Infinity,
					repeatType: 'mirror',
				},
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

export const opacityVariant = {
	hidden: { fillOpacity: 0 },
	visible: {
		opacity: [0.5, 1],
		transition: {
			type: 'tween',
			duration: 2,
			repeat: Infinity,
			repeatType: 'mirror',
		},
	},
};

export const revealText = {
	initial: { opacity: 0, x: 0, y: 0 },
	animate: {
		opacity: 1,
		x: [100, 0],
		y: [-100, 0],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
};

export const revealText2 = {
	initial: { opacity: 0.1, x: 0, y: 0 },
	animate: {
		opacity: 1,
		x: [100, 0],
		y: [-100, 0],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
};
