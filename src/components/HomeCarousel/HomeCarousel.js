import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Button,
} from 'reactstrap';
import './HomeCarousel.scss';

const items = [
	{
		src:
			'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		altText: 'Sponsor a Pivot Tech Student Today!',
		caption: 'Click Make The Pivot!',
		header: 'We in here'
	},
	{
		src:
			'https://images.unsplash.com/photo-1596496357040-d98c165dfcc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',


		altText: 'Pivot is proud to partner with RePublic High School',

	},
	{
		src:
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

		altText: 'Pivot is proud to partner with RePublic High School',
		caption: 'Become a Pivot Tech Partner Today!',
	},
	{
		src:
			'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

		altText: 'Why Pivot Tech',
		caption: 'Become a Pivot Tech Partner Today!',
	}
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
				<img className="carousel-image" src={item.src} alt={item.altText} />
				<CarouselCaption
					className="carousel-caption"
					captionHeader={item.altText}
					captionText={item.caption}
				/>

			</CarouselItem>
		);
	});

	return (
		
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators 
				className="carousel-indicators"
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
