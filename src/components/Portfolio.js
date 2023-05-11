import '../styles/portfolio.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { projectImages } from './data';

const Portfolio = forwardRef((props, ref) => {
	const [currentProject, setCurrentProject] = useState([]);
	const [selectedButton, setSelectedButton] = useState(null);

	useEffect(() => {
		setCurrentProject(projectImages['Twitter-Ethereum']);
	}, []);

	const handleButtonClick = (project) => {
		setCurrentProject(projectImages[project]);
	};

	return (
		<section className='portfolio' data-target='portfolio' ref={ref}>
			<h2 className='heading'>
				Recent <span>Projects</span>
			</h2>
			<div className='project-select-wrapper'>
				<button
					className={`project-btns ${selectedButton === 'Twitter-Ethereum' ? 'selected' : ''}`}
					onClick={() => {
						handleButtonClick('Twitter-Ethereum');
						setSelectedButton('Twitter-Ethereum');
					}}
				>
					Twitter-Ethereum
				</button>
				<button
					className={`project-btns ${selectedButton === 'XTK Exchange' ? 'selected' : ''}`}
					onClick={() => {
						handleButtonClick('XTK Exchange');
						setSelectedButton('XTK Exchange');
					}}
				>
					XTK Exchange
				</button>
				<button
					className={`project-btns ${selectedButton === 'Gaming Store' ? 'selected' : ''}`}
					onClick={() => {
						handleButtonClick('Gaming Store');
						setSelectedButton('Gaming Store');
					}}
				>
					Gaming Store
				</button>
			</div>

			{currentProject.images ? (
				<div className='portfolio-container'>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						loop
						pagination={{ clickable: true }}
						className='swiper'
					>
						{currentProject.images.map((img, index) => (
							<SwiperSlide key={index} className='swiper-slide'>
								<img src={img} alt={`Slide ${index}`} />
							</SwiperSlide>
						))}
					</Swiper>

					{/* <div className='portfolio-layer'>
					<h4>Twitter Clone - Ethereum</h4>
				</div> */}
				</div>
			) : (
				<></>
			)}
			<div className='project-options'>
				<a href={currentProject.github} target='_blank' rel='noopener noreferrer' className='project-options'>
					<i class='bx bxl-github'></i>
				</a>
				<a href={currentProject.livesite} target='_blank' rel='noopener noreferrer' className='project-options'>
					<i class='bx bx-show'></i>
				</a>
				<a href={currentProject.walkthrough} target='_blank' rel='noopener noreferrer' className='project-options'>
					<i class='bx bx-video-recording'></i>
				</a>
			</div>
		</section>
	);
});

export default Portfolio;
