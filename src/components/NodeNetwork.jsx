import React, { useEffect, useRef, useState } from 'react';

const NodeNetwork = () => {
	const containerRef = useRef(null);
	const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
	const [points, setPoints] = useState([]);
	const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

	// Resize handler
	useEffect(() => {
		if (containerRef.current) {
			setDimensions({
				width: containerRef.current.clientWidth,
				height: containerRef.current.clientHeight,
			});
		}
	}, []);

	// Generate static nodes once dimensions are ready
	useEffect(() => {
		const nodeCount = 28;
		const generated = [];
		for (let i = 0; i < nodeCount; i++) {
			generated.push({
				x: Math.random() * dimensions.width,
				y: Math.random() * dimensions.height,
				vx: (Math.random() - 0.5) * 0.4,
				vy: (Math.random() - 0.5) * 0.4,
				radius: Math.random() * 2 + 2,
			});
		}
		setPoints(generated);
	}, [dimensions.width, dimensions.height]);

	// Animation Loop
	useEffect(() => {
		let animationId;
		const updatePhysics = () => {
			setPoints((prevPoints) =>
				prevPoints.map((p) => {
					let nx = p.x + p.vx;
					let ny = p.y + p.vy;

					// Boundary collisions
					if (nx < 0 || nx > dimensions.width) p.vx *= -1;
					if (ny < 0 || ny > dimensions.height) p.vy *= -1;

					return {
						...p,
						x: Math.max(0, Math.min(dimensions.width, nx)),
						y: Math.max(0, Math.min(dimensions.height, ny)),
					};
				})
			);
			animationId = requestAnimationFrame(updatePhysics);
		};

		if (points.length > 0) {
			animationId = requestAnimationFrame(updatePhysics);
		}
		return () => cancelAnimationFrame(animationId);
	}, [points.length, dimensions.width, dimensions.height]);

	const handleMouseMove = (e) => {
		if (containerRef.current) {
			const rect = containerRef.current.getBoundingClientRect();
			setMousePos({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};

	const handleMouseLeave = () => {
		setMousePos({ x: -1000, y: -1000 });
	};

	// Find close connections
	const connections = [];
	const maxDistance = 90;

	for (let i = 0; i < points.length; i++) {
		// Connections to other nodes
		for (let j = i + 1; j < points.length; j++) {
			const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
			if (dist < maxDistance) {
				connections.push({
					x1: points[i].x,
					y1: points[i].y,
					x2: points[j].x,
					y2: points[j].y,
					opacity: 1 - dist / maxDistance,
				});
			}
		}

		// Connection to cursor
		const cursorDist = Math.hypot(points[i].x - mousePos.x, points[i].y - mousePos.y);
		if (cursorDist < 120) {
			connections.push({
				x1: points[i].x,
				y1: points[i].y,
				x2: mousePos.x,
				y2: mousePos.y,
				opacity: (1 - cursorDist / 120) * 0.8,
				isCursor: true,
			});
		}
	}

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="w-full h-full relative cursor-crosshair overflow-hidden"
		>
			<svg className="absolute inset-0 w-full h-full select-none pointer-events-none">
				{/* Fine line connections */}
				{connections.map((c, idx) => (
					<line
						key={idx}
						x1={c.x1}
						y1={c.y1}
						x2={c.x2}
						y2={c.y2}
						stroke={c.isCursor ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.08)'}
						strokeWidth={c.isCursor ? 1.2 : 0.8}
						style={{ opacity: c.opacity }}
					/>
				))}

				{/* Floating nodes */}
				{points.map((p, idx) => {
					const distToCursor = Math.hypot(p.x - mousePos.x, p.y - mousePos.y);
					const isHighlighted = distToCursor < 120;
					
					return (
						<g key={idx}>
							{isHighlighted && (
								<circle
									cx={p.x}
									cy={p.y}
									r={p.radius * 2.2}
									fill="rgba(0, 0, 0, 0.04)"
									stroke="rgba(0, 0, 0, 0.08)"
									strokeWidth={0.5}
								/>
							)}
							<circle
								cx={p.x}
								cy={p.y}
								r={p.radius}
								fill={isHighlighted ? '#121214' : '#8e8e93'}
								className="transition-colors duration-200"
							/>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default NodeNetwork;
