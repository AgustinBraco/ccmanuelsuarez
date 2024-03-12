import { Link } from 'react-router-dom';

const Logo = () => (
	<Link to="/" className="logoContainer">
		<img src="/logo.png" alt="logo" className="logoImage" />
		<div>
			<p className="logoText">Centro Cultural</p>
			<p className="logoText">
				<b>Manuel Suarez</b>
			</p>
		</div>
	</Link>
);

export default Logo;
