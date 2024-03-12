import { Link } from 'react-router-dom';

const RadioLink = ({ link, icon, name }) => (
	<Link to={link} target='_blank' >
		<img src={`/radio/${icon}.png`} alt={`icono de ${icon}`} />
		{name}
	</Link>
);

export default RadioLink;
