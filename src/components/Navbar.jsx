import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToogle] = useState(false);

	return (
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#050816]`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo img" className="w-9 h-9 rounded-full object-contain" />
					<p className="text-white text-[18px] font-semibold cursor-pointer flex">
						Tokhirjon &nbsp; <span className="hidden sm:block">Khasanov</span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							onClick={() => setActive(link.title)}
							className={`${active === link.title ? "text-white" : "text-[#aaa6c3]"} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToogle(!toggle)} />
					<div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
						<ul className="list-none flex flex-col justify-end items-start gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									onClick={() => {
										setActive(link.title);
										setToogle(!toggle);
									}}
									className={`${active === link.title ? "text-white" : "text-[#aaa6c3]"} font-poppins text-[16px] font-medium cursor-pointer`}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
