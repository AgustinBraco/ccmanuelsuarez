import { useEffect, useState } from 'react';
import { Logo, NavLinks } from '..';

const HeaderContainer = () => {
	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {}, [showNav]);

	return (
		<header className={`headerContainer ${scrolled ? 'white-bg' : ''}`}>
			<Logo />

			<nav className="headerNavbar">
				<NavLinks />
			</nav>

			<>
				<nav className={`nav-mobile ${showNav ? 'active' : ''}`}>
					<div className="nav-mobileTop">
						<p>Menú</p>
						<i onClick={() => setShowNav(false)} className="bi bi-x-lg"></i>
					</div>
					<div className="nav-mobileLinksWrapper">
						<NavLinks setShowNav={setShowNav} />
					</div>

					<div className="nav-mobileContactInfo">
						<p>+54 11 4208-9429</p>
						<p>centroculturalmsuarez@gmail.com</p>
					</div>
				</nav>
				{showNav && <div className="nav-bg" onClick={() => setShowNav(false)}></div>}
			</>

			<button className="headerMenu" onClick={() => setShowNav(!showNav)}>
				<i className="bi bi-list headerMenuIcon"></i>
			</button>
		</header>
	);
};

export default HeaderContainer;
