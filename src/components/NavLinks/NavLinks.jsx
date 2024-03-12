import { Link } from 'react-router-dom';

export const NavLinks = setShowNav => {
	return (
		<>
			<Link onClick={() => setShowNav && setShowNav(false)} className="headerLink homeLink" to="/">
				Inicio
			</Link>
			<Link onClick={() => setShowNav && setShowNav(false)} className="headerLink" to="/">
				Biblioteca
			</Link>
			<Link onClick={() => setShowNav && setShowNav(false)} className="headerLink" to="/">
				Cerámica
			</Link>
			<Link onClick={() => setShowNav && setShowNav(false)} className="headerLink" to="/">
				Radio
			</Link>
			<Link
				onClick={() => setShowNav && setShowNav(false)}
				className="headerLink contactLink"
				to="/contacto"
			>
				Contacto
			</Link>
		</>
	);
};

export default NavLinks;
