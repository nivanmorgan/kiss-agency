import { Heading, ServicesSlide, ServiceList } from '../components';
import { servicesSectionText, services } from '../utils/constants';

const Services = () => {
	const scrollToContact = (e) => {
		e.preventDefault();
		const element = document.getElementById('contact');
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<section
			id="services"
			className="w-full relative py-20 lg:py-32 overflow-hidden bg-carbon-900/30"
		>
			<div className="container space-y-16">
				{/* Top Section Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Left: Section Header */}
					<div className="lg:col-span-6 space-y-8">
						<Heading
							tag={servicesSectionText.tag}
							header={servicesSectionText.heading}
							content={servicesSectionText.text}
							btn={['Get Started', scrollToContact, '#contact']}
						/>
					</div>

					{/* Right: Service Cards Carousel Slider */}
					<div className="lg:col-span-6 w-full overflow-hidden">
						<ServicesSlide services={services} />
					</div>
				</div>

				{/* Bottom Section Layout: Infinite badges ticker */}
				<div className="pt-8">
					<div className="text-center mb-6">
						<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Trusted By Creative Professionals</span>
					</div>
					<ServiceList />
				</div>
			</div>
		</section>
	);
};

export default Services;
