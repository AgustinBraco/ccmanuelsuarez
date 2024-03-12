const FormContainer = () => (
	<section>
		<p>Contacto</p>
		<form>
			<label>
				Nombre*
				<input type="text" placeholder="Juan" />
			</label>
			<label>
				Apellido*
				<input type="text" placeholder="Lopez" />
			</label>
			<label>
				Número de celular*
				<input type="number" placeholder="+54 11 1111-1111" />
			</label>
			<label>
				Email*
				<input type="email" placeholder="Example@gmail.com" />
			</label>
			<label>
				Mensaje*
				<textarea placeholder="¡Dejanos tu mensaje!" />
			</label>
			<button type="submit">Enviar</button>
		</form>
	</section>
);

export default FormContainer;
