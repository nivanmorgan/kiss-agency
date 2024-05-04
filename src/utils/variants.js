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
	initial: { opacity: 0, x: 10, y: 70 },
	animate: (i) => ({
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			delay: i * 0.2,
			type: 'spring',
			stiffness: 500,
			damping: 85,
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
