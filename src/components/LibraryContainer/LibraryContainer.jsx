const LibraryContainer = () => (
	<section className="libraryContainer">
		<div className="libraryTextWrapper">
			<div className="libraryTitle">
				<p>Biblioteca</p> <p>Raúl Gonzalez Tuñón</p>
			</div>
			<p className="libraryText">
				Disponemos de una colección muy nutrida de libros históricos de referencia política de
				tradiciones vinculadas con la izquierda y temáticas asociadas con un espacio ameno para el
				disfrute de la lectura.
			</p>
		</div>

		<div className="libraryImgsWrapper">
			<img className="library-img-1" src='/library/library_1.png' alt="bibliotecaraulgonzalez" />
			<img className="library-img-2" src='/library/library_2.png' alt="bibliotecaraulgonzalez" />
		</div>
	</section>
);

export default LibraryContainer;
