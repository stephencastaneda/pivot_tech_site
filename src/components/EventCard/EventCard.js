import React from 'react';
import './EventCard.scss';
import moment from 'moment';

function EventCard({ event }) {
	return (
		<div class="event-card-container">
			<div class="image-container">
				<img
					src={event.eventImage}
					alt={event.eventTitle}
					className="event-image"
				/>
			</div>
			<div class="event-card-text">
				<h3>{event.eventTitle}</h3>
				<span>Date: {moment(event.date).format('LL')}</span>
				<span>Time: {event.time}</span>
				<span>Description: {event.description}</span>
			</div>
		</div>
	);
}

export default EventCard;
