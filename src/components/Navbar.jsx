import { useState } from "react";

import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import logo from "../assets/imgs/kiss-agency-logo.svg";

const Navbar = () => {
	const [menuToggled, setMenuToggled] = useState(false);
	return (
		<div className="bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] flex items-center justify-center">
			<div className="container py-5 flex items-center justify-between gap-[25px] xl:gap-[50px] relative">
				<div className="hidden lg:flex flex-1 justify-between items-center w-full">
					<a href="#" className="navlinks">
						Home
					</a>
					<a href="#" className="navlinks">
						About us
					</a>
					<a href="#" className="navlinks">
						Our values
					</a>
					<a href="#" className="navlinks">
						Our Services
					</a>
				</div>
				<div className="">
					<img src={logo} className="h-[40px] lg:h-[50px] object-cover" />
				</div>
				<div className="hidden lg:flex flex-1 justify-between items-center w-full">
					<a href="#" className="navlinks">
						Digital Solutions
					</a>
					<a href="#" className="navlinks">
						Subscribe
					</a>
					<button className="btn-1">Contact Us</button>
				</div>
				<div className="lg:hidden flex items-center">
					<button
						className=""
						onClick={() => setMenuToggled((toggled) => !toggled)}
					>
						{menuToggled ? (
							<MdClose className="text-[--black] text-2xl" />
						) : (
							<CgMenuLeftAlt className="text-[--black] text-2xl" />
						)}
					</button>
				</div>

				{/* popup */}
				{/* {menuToggled && (
					<div className="fixed w-full left-0 top-0 h-screen bg-[--overlay]"></div>
				)} */}
			</div>
		</div>
	);
};

export default Navbar;
