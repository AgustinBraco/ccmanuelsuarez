import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing, Contact, Error } from './screens';
import { Header, Footer } from './components';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route exact path="/" element={<Landing />} />
			<Route exact path="/contacto" element={<Contact />} />
			<Route exact path="*" element={<Error />} />
		</Routes>
		<Footer />
	</Router>
);

export default App;
