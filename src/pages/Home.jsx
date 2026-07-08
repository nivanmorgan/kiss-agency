import { useState, useEffect } from 'react';
import {
	Hero,
	About,
	OurValues,
	Services,
	DigitalSolutions,
	Contact,
	AI,
} from '../containers';
import {
	Navbar,
	Footer,
	SmoothScroll,
	CallUs,
} from '../components';

function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 800);
		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="w-full h-screen flex items-center justify-center bg-white overflow-hidden">
				<div className="flex flex-col items-center space-y-4">
					<div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
					<span className="text-xs font-bold uppercase tracking-widest text-slate-500 animate-pulse">Loading Kiss Agency...</span>
				</div>
			</div>
		);
	}

	return (
		<SmoothScroll>
			<div className="relative min-h-screen bg-white text-slate-900 selection:bg-slate-900/10 selection:text-slate-900">
				<Navbar />
				
				<div className="section-light webflow-grid-light">
					<Hero />
				</div>
				
				<div className="section-dark webflow-grid-dark border-y border-white/5">
					<About />
				</div>
				
				<div className="section-light webflow-grid-light">
					<OurValues />
				</div>
				
				<div className="section-dark webflow-grid-dark border-y border-white/5">
					<Services />
				</div>
				
				<div className="section-light webflow-grid-light">
					<DigitalSolutions />
				</div>
				
				<div className="section-dark webflow-grid-dark border-t border-white/5">
					<Contact />
					<Footer />
				</div>
				
				<CallUs />
				<AI />
			</div>
		</SmoothScroll>
	);
}

export default Home;
