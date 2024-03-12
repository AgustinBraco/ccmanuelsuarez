// import { ceramicData } from "../../data/ceramicData";
// import Carousel from "../Carousel/Carousel";

const CeramicContainer = () => {
	
	return (
	<section className="ceramicContainer">
		<div className="ceramicTitleWrapper">
			<p>Cerámica</p>
			<img src="/ceramic/ceramic.png" alt="ceramica_micorriza" />
		</div>
		<div className="ceramicTextWrapper">
			<div className="ceramicText">
				<p>
					Comenzó esta actividad con un horno donado por la Escuela de Cerámica de Avellaneda con el
					cual jóvenes de dicho espacio realizaban prácticas docentes con grupos del Bachillerato
					Arbolito que funcionaba en nuestra institución. Luego dicha experiencia se transformó en
					algo de mayor envergadura: logramos generar una sede de talleres de formación laboral del
					Ministerio de Trabajo de la Nación. Estos talleres son únicos en nuestro país con dicha
					característica.
				</p>

				<p>
					En paralelo se fue gestando un colectivo de producción (COOPECE) vinculado a las tradiciones
					de autogestión, que durante años se mantuvo en funcionamiento, y donde nuestro querido y
					siempre recordado Natalio Maccarini fue referente singular.
				</p>
			</div>

			<div className="ceramicText">
				<p>
					Hoy en día saliendo de la pandemia ya en el espacio de cerámica se comienza a gestar un
					nuevo colectivo de producción MICORRIZA Cerámica Cooperativa.
				</p>

				<p>
					Este es un proyecto que excede lo laboral y comercial. Micorriza se trata de la forma en que
					elegimos habitar este mundo. Así como los hongos y las plantas que encontraron hace miles de
					años las asociaciones Micorrícicas para conectarse y ayudarse, esperamos generar en esta
					cooperativa, un horizonte donde el apoyo mutuo sea moderador de nuestras relaciones.
				</p>

				<p>
					Así mismo, encontramos en las artes cerámicas, una forma de ser parte del equilibrio
					dinámico entre los elementos esenciales para la vida, como lo son la tierra, el aire, el
					fuego y el agua; y, a través de ellos, poder plasmar en cada pieza, esta danza de sueños y
					sentires.
				</p>
			</div>

			{/* <Carousel data={ceramicData}/> */}
			
		</div>
	</section>
)};

export default CeramicContainer;
