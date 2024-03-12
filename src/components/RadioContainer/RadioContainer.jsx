import { RadioPlayer, RadioLink } from '..';

const RadioContainer = () => (
	<section>
		<div>
			<div>
				<p>Radio</p>
				<p>FM La Mosca 93.5</p>
			</div>

			<RadioPlayer />

			<div>
				<div>
					<p>
						Durante muchos años cobijamos a decenas de programas contraculturales, deportivos,
						políticos, musicales y de diversa índole. Disponemos de antena de alcance medio con
						transmisor analógico que nos permite una llegada a los hogares de varios kilómetros a la
						redonda. Luego vía app y streaming logramos alcanzar todos los dispositivos digitales
						que nos quieran escuchar.
					</p>
					<img src="/radio/radio_1.png" alt="radio_img_1" />
				</div>

				<div>
					<img src="/radio/radio_2.png" alt="radio_img_2" />
					<p>
						Con el inicio de la pandemia de 2020 suspendimos las transmisiones pero afortunadamente
						hemos vuelto. En 2023 nos encontramos relanzando la programación nuevamente de “Sin
						Careta”: ¡bastión de feminismo, actualidad y rocanrol!
					</p>
				</div>
			</div>

			<div className="redes-radio-container">
				<p>¡Seguinos! en:</p>
				<RadioLink link='https://www.facebook.com/RadioFMLaMosca?mibextid=ZbWKwL' icon='facebook' name='La mosca' />
				<RadioLink link='https://www.facebook.com/sin.careta?mibextid=ZbWKwL' icon='facebook' name='Sin careta' />
			</div>
		</div>
	</section>
);

export default RadioContainer;
