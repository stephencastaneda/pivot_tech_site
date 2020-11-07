import React, { useState } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import pivotRequests from '../../helpers/data/pivotRequests';
import moment from 'moment';
import './AddEventModal.scss';

const defaultEvent = {
	id: '',
	date: '',
	time: '',
	eventTitle: '',
	description: '',
};

const AddEventModal = ({ toggle, modal }) => {
	const [event, setEvent] = useState(defaultEvent);
	const [eventImage, setEventImage] = useState('');

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		e.persist();
		const tempEvent = { ...event };
		tempEvent[name] = e.target.value;
		setEvent(tempEvent);
	};

	// Form change functions. Updates the course state whenever the user types something new.
	const dateChange = (e) => formFieldStringState('date', e);
	const timeChange = (e) => formFieldStringState('time', e);
	const eventTitleChange = (e) => formFieldStringState('eventTitle', e);
	const descriptionChange = (e) => formFieldStringState('description', e);

	// Pushes new course to firebase
	const addEvent = (newEvent) => {
		pivotRequests
			.postEvent(newEvent)
			.then(() => {
				toggle(); // closes modal
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Submits the course to firebase
	const submitEvent = (e) => {
		e.preventDefault();
		const myEvent = { ...event };
		const timeArray = event.time.split(':');
		const time = timeArray[0] + timeArray[1];
		const formattedTime = moment(time, 'hmm').format('h:mm a');
		myEvent.eventImage = eventImage;
		myEvent.time = formattedTime;

		addEvent(myEvent);
		setEvent(defaultEvent);
	};

	// cloudinary image upload
	const uploadImage = async (event) => {
		const files = event.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'productImage');
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dbjxqdddk/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const file = await res.json();
		setEventImage(file.secure_url);
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Add Event</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="eventTitle">Event Title</Label>
							<Input
								type="text"
								name="eventTitle"
								id="eventTitle"
								placeholder="Event Title"
								onChange={eventTitleChange}
								value={event.eventTitle}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="date">Date</Label>
							<Input
								type="date"
								name="date"
								id="date"
								placeholder="Start Date"
								onChange={dateChange}
								value={event.date}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="time">Time</Label>
							<Input
								type="time"
								name="time"
								id="time"
								placeholder="Time"
								onChange={timeChange}
								value={event.time}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="description">Description</Label>
							<Input
								type="text"
								name="description"
								id="description"
								placeholder="Description"
								onChange={descriptionChange}
								value={event.description}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="file">Image</Label>
							<Input
								type="file"
								name="file"
								id="file"
								className="form-control"
								onChange={uploadImage}
							/>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
					<Button color="primary" onClick={submitEvent}>
						Add Event
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default AddEventModal;
