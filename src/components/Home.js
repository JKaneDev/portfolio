const Home = ({ aboutRef }) => {
	const handleClick = (e) => {
		e.preventDefault();
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='App'>
			<header className='header'>
				<a href='#' className='logo'>
					James.
				</a>

				<nav className='navbar'>
					<a href='' className='hoverUnderlineEffect'>
						Home
					</a>
					<a href='' className='hoverUnderlineEffect' onClick={handleClick}>
						About
					</a>
					<a href='' className='hoverUnderlineEffect'>
						Portfolio
					</a>
					<a href='' className='hoverUnderlineEffect'>
						Contact
					</a>
				</nav>
			</header>

			<section className='home'>
				<div className='home-content'>
					<h1>Hi, I'm James Kane</h1>
					<h3>Blockchain Developer</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur eum beatae quasi molestias eaque
						asperiores, id quibusdam aliquid blanditiis optio quod placeat tenetur error, nihil, vel accusantium quaerat
						corporis.
					</p>
					<div className='btn-wrapper'>
						<a href='#'>Download CV</a>
						<a href='#'>Reach Out</a>
					</div>
					<div className='link-wrapper'>
						<a href='https://twitter.com/_jtkane'>
							<i className='bx bxl-twitter'></i>
						</a>
						<a href='https://www.linkedin.com/in/james-kane-3190b8276/'>
							<i className='bx bxl-linkedin'></i>
						</a>
						<a href='https://github.com/JKaneDev'>
							<i className='bx bxl-github'></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
