import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	Button,
} from 'reactstrap';
import './HomeCarousel.scss';

const items = [
	{
		class: 'pivot-to-tech',
		caption: 'Sponsor a pivot tech student today!',
		href: 'make-the-pivot',
		buttonText: 'Sponsor a Student',
	},
	{
		class: 'remote-learning',
		caption: 'Pivot is proud to partner with Republic High School!',
		href: 'pivot-partner',
		buttonText: 'Become a Partner',
	},
	{
		class: 'become-partner',
		caption: 'Pivot Design House Coming Soon!',
	},
];

const HomeCarousel = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<div className={item.class}>
					<div className="hero-text">
						{item.buttonText ? (
							<Button
								href={item.href}
								className="carousel-button btn hero-btn"
								style={{ backgroundColor: 'navy', color: 'white' }}
							>
								{item.buttonText}
							</Button>
						) : null}
					</div>
				</div>
				<div className="carousel-caption">
					<p>{item.caption}</p>
				</div>
			</CarouselItem>
		);
	});

	return (
		<Carousel
			autoPlay={false}
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			pause={true}
		>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default HomeCarousel;
