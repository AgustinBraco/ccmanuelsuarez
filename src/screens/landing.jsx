import {
	TopBar,
	HomeContainer,
	HistoryContainer,
	LibraryContainer,
	CeramicContainer,
	RadioContainer,
} from '../components';

const Landing = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<TopBar />
			<HomeContainer />
			<HistoryContainer />
			<LibraryContainer />
			<CeramicContainer />
			<RadioContainer />
		</div>
	);
};

export default Landing;
