import './styles/main.scss';
import './styles/about.scss';
import 'boxicons/css/boxicons.min.css';
import Home from './components/Home';
import About from './components/about';
import Portfolio from './components/Portfolio';
import { useRef } from 'react';

function App() {
	const aboutRef = useRef(null);
	// ADD LINK NAVIGATION ON LOAD

	return (
		<>
			<Home aboutRef={aboutRef} />
			<About ref={aboutRef} />
			<Portfolio />
		</>
	);
}

export default App;
