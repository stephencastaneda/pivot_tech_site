import React from 'react';
import './EventCard.scss';
import moment from 'moment';

function EventCard({ event }) {
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
				<h3>{event.eventTitle}</h3>
				<span>{moment(event.date).format('LL')}</span>
				<span>{event.time}</span>
				<span>{event.description}</span>
			</div>
		</div>
	);
}

export default EventCard;
