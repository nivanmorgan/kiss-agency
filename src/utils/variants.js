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
	initial: { opacity: 0, x: 0, y: 0 },
	animate: (i) => ({
		opacity: 1,
		x: [10, 0],
		y: [100, 0],
		transition: {
			delay: i * 0.3,
			type: 'spring',
			stiffness: 800,
			damping: 285,
		},
	}),
};

export const slideInBottom2 = {
	initial: { opacity: 0, x: 50, y: 50 },
	animate: {
		opacity: 1,
		x: [50, 0],
		y: [50, 0],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
};

export const slideInBottom3 = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: [50, -10, 0],
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 45,
		},
	},
	exit: {
		opacity: 0,
		y: [0, -10, 50],
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 45,
		},
	},
};

export const slideInBottom4 = {
	initial: { opacity: 0, x: 0, y: 0 },
	animate: (i) => ({
		opacity: 1,
		x: [10, 0],
		y: [50, 0],
		transition: {
			delay: i * 0.3,
			type: 'spring',
			stiffness: 300,
			damping: 55,
		},
	}),
	// exit: {
	// 	opacity: 0,
	// 	x: [0, 50],
	// 	y: [0, 50],
	// 	transition: {
	// 		type: 'spring',
	// 		stiffness: 500,
	// 		damping: 85,
	// 	},
	// },
};

export const slideInTop = {
	initial: { opacity: 0, x: 0, y: 0 },
	animate: (i) => ({
		opacity: 1,
		x: [100, 0],
		y: [-100, 0],
		transition: {
			delay: i * 0.3,
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	}),
};

export const fallDownVariant = {
	initial: { opacity: 0, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
	animate: {
		opacity: [0, 1],
		x: [100, 0],
		y: [-100, 0],
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
	initial: { opacity: 0.25, x: 0, y: 0 },
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

const accordionVariant = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const popupVariant = {
	initial: { scale: 0, opacity: 1, y: 0 },
	exit: {
		scale: 0,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 700,
			damping: 35,
		},
	},
	animate: {
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 700,
			damping: 35,
		},
	},
};
