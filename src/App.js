import './styles/main.scss';
import './styles/about.scss';
import 'boxicons/css/boxicons.min.css';
import Home from './components/Home';
import About from './components/about';
import Portfolio from './components/Portfolio';
import { useRef } from 'react';

function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const portfolioRef = useRef(null);
	// ADD LINK NAVIGATION ON LOAD

	return (
		<>
			<Home homeRef={homeRef} aboutRef={aboutRef} portfolioRef={portfolioRef} />
			<About ref={aboutRef} />
			<Portfolio ref={portfolioRef} />
		</>
	);
}

export default App;
