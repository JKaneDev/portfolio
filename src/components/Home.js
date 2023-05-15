const Home = ({ homeRef, aboutRef, portfolioRef }) => {
	const goToAbout = (e) => {
		e.preventDefault();
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const goToPortfolio = (e) => {
		e.preventDefault();
		portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const goToHome = (e) => {
		e.preventDefault();
		homeRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='App'>
			<header className='header'>
				<a href='#' rel='noopener noreferrer' className='logo'>
					James.
				</a>
				<nav className='navbar'>
					<a href='' className='hoverUnderlineEffect' onClick={goToHome}>
						Home
					</a>
					<a href='' className='hoverUnderlineEffect' onClick={goToAbout}>
						About
					</a>
					<a href='' className='hoverUnderlineEffect' onClick={goToPortfolio}>
						Portfolio
					</a>
					<a
						href='mailto:jtkanedev@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hoverUnderlineEffect'
					>
						Contact
					</a>
				</nav>
			</header>

			<section className='home' ref={homeRef}>
				<div className='home-content'>
					<h1>Hi, I'm James Kane</h1>
					<h3>Blockchain Developer</h3>
					<p>
						Web3 enthusiast on an adventure to build the future of the internet and participating in the revolution of a
						decentralized web. Fostering an ever-growing obsession with Blockchain and NFTs. Wondering if I'm the only
						one that has frequent dreams about Smart Contracts.
					</p>
					<div className='btn-wrapper'>
						<a
							href='https://dl.dropboxusercontent.com/s/pmbo3wzykfmmfc7/CV%201.pdf?dl=0'
							download
							target='_blank'
							rel='noopener noreferrer'
						>
							Download CV
						</a>
						<a href='mailto:jtkanedev@gmail.com' target='_blank' rel='noopener noreferrer'>
							Reach Out
						</a>
					</div>
					<div className='link-wrapper'>
						<a href='https://twitter.com/_jtkane'>
							<i className='bx bxl-twitter' target='_blank' rel='noopener noreferrer'></i>
						</a>
						<a href='https://www.linkedin.com/in/james-kane-3190b8276/'>
							<i className='bx bxl-linkedin' target='_blank' rel='noopener noreferrer'></i>
						</a>
						<a href='https://github.com/JKaneDev'>
							<i className='bx bxl-github' target='_blank' rel='noopener noreferrer'></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
