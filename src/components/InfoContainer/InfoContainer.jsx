import { InfoEmail, InfoNumber, InfoAddress } from '..';

const InfoContainer = () => (
	<section>
		<div className="infoContainer">
			<InfoAddress />
			<InfoEmail />
			<InfoNumber />
		</div>
	</section>
);

export default InfoContainer;
