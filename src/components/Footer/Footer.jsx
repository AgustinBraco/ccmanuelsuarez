import { Link } from 'react-router-dom';
import { Logo, InfoAddress, InfoNumber } from '..';

const FooterContainer = () => (
	<footer className="footerContainer">
		<hr className="hrFirst" />

		<div className="footerTop">
			<Logo />
			<div className="footerInfo">
				<InfoAddress />
				<InfoNumber />
			</div>
		</div>

		<hr className="hrSecond" />

		<div className="footerBottom">
			<Link to='/' target='_blank' className="footerLink">
				<p>Desarrollado por:</p>
				<p>
					<b>Lucas Oliva</b>
				</p>
			</Link>

			<div className="footerTexts footerCopyright">
				<p>No part of this site may be reproduced without our written permission.</p>
				<p>Copyright © 2024 all rights reserved.</p>
			</div>

			<Link to='/' target='_blank' className="footerLink textEnd">
				<p>Diseñado por:</p>
				<p>
					<b>Maximiliano Elgarte</b>
				</p>
			</Link>
		</div>
	</footer>
);

export default FooterContainer;
