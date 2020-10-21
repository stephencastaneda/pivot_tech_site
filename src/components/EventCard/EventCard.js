import React from 'react';
import './EventCard.scss';

function EventCard(props) {
	return (
		<div class="event-card-container">
			<div class="image-container">
				<img
					src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"
					alt=""
					className="event-image"
				/>
			</div>
			<div class="event-card-text">
				<h3>Trying it out son!!!</h3>
				<p>testing</p>
				<p>testing to see if it works</p>
				{/* <h3>{props.eventTitle}</h3>
				<span>{props.eventDate}</span>
				<span>{props.description}</span> */}
			</div>
		</div>
	);
}

export default EventCard;
