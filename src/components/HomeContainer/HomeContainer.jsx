import { HomeSvg, HomeCircle } from '..';

const HomeContainer = () => (
	<main className="homeContainer">
		<div className="homeText-wrapper">
			<div className="home-text">
				<p>¡Bienvenido/a al</p>
				<p>Centro Cultural </p>
				<p>
					<b>Manuel Suarez!</b>
				</p>
			</div>

			<div className="home-text home-subtext">
				<p>Te esperamos en: </p>
				<p>
					<b>Av. Hipólito Yrigoyen 1625, Piñeyro, Buenos Aires</b>
				</p>
			</div>
		</div>

		<HomeSvg />
		<HomeCircle />
	</main>
);

export default HomeContainer;
