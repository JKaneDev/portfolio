import '../styles/portfolio.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useEffect, useState, useRef } from 'react';
import { forwardRef } from 'react';

const Portfolio = forwardRef((props, ref) => {
	const [currentImages, setCurrentImages] = useState([]);

	useEffect(() => {
		setCurrentImages(projectImages['Twitter-Ethereum']);
	}, []);

	useEffect(() => {
		console.log('Current Images: ', currentImages);
	}, [currentImages]);

	const projectImages = {
		'Twitter-Ethereum': [
			'https://dl.dropboxusercontent.com/s/dpad8edfh0wsujh/Feed-smaller.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/mnhi4p4w1cahxru/Twitter-comments.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/3wptb2dxp0bsy4g/CreateProfile-smaller.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/wssc2um22v16ega/Auction-smaller.jpg?dl=0',
		],
		'XTK Exchange': ['https://dl.dropboxusercontent.com/s/14xg275trdtkxnd/Exchange-new.jpg?dl=0'],
		'Gaming Store': [
			'https://dl.dropboxusercontent.com/s/6ei83g3h776xs8l/home.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/tqjr868hmewcvkd/checkout.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/lex6jiwehpa826y/wishlist.jpg?dl=0',
			'https://dl.dropboxusercontent.com/s/rb0issrj73b8vql/search.jpg?dl=0',
		],
	};

	const handleButtonClick = (project) => {
		setCurrentImages(projectImages[project]);
	};

	return (
		<section className='portfolio' data-target='portfolio' ref={ref}>
			<h2 className='heading'>
				Recent <span>Projects</span>
			</h2>
			<div className='project-select-wrapper'>
				<button className='project-btns' onClick={() => handleButtonClick('Twitter-Ethereum')}>
					Twitter-Ethereum
				</button>
				<button className='project-btns' onClick={() => handleButtonClick('XTK Exchange')}>
					XTK Exchange
				</button>
				<button className='project-btns' onClick={() => handleButtonClick('Gaming Store')}>
					Gaming Store
				</button>
			</div>

			{currentImages ? (
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
						{currentImages.map((img, index) => (
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
		</section>
	);
});

export default Portfolio;
