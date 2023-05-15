import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
	return (
		<section className='about' data-target='about' ref={ref}>
			<div className='about-info'>
				<h2 className='heading'>
					About <span>Me</span>
				</h2>
				<h3></h3>
				<p>
					In 2022 I decided to become a Blockchain Developer. After going through the curriculum of Harvard's CS50, The
					Odin Project's Full-Stack Javascript Path & DApp University's Blockchain Developer Bootcamp - I developed a
					solid set of skills in various technologies and a strong grasp of programming fundamentals that gave me the
					confidence to develop my own Web3 projects. I demonstrate these skills in my capstone project - a Twitter
					Clone built on Ethereum. Click the link below to see this project and a few others I had a blast making.
				</p>
				<a href='' className='btn'>
					See Projects
				</a>
			</div>
		</section>
	);
});

export default About;
