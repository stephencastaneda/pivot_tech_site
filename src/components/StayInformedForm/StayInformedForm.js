import React, { useState } from 'react';
import './StayInformedForm.scss';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import pivotRequests from '../../helpers/data/pivotRequests';
import moment from 'moment';
import SubscriberModal from '../SubscriberModal/SubscriberModal';

const defaultSubscriber = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	course: '',
	date: moment(new Date()).format('LL'),
};

const StayInformedForm = () => {
	const [subscriber, setSubscriber] = useState(defaultSubscriber);
	const [isOpen, setIsOpen] = useState(false);

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		e.persist();
		const tempSubscriber = { ...subscriber };
		tempSubscriber[name] = e.target.value;
		setSubscriber(tempSubscriber);
	};

	// Form change functions. Updates the applicant state whenever the user types something new.
	const firstNameChange = (e) => formFieldStringState('firstName', e);
	const lastNameChange = (e) => formFieldStringState('lastName', e);
	const emailChange = (e) => formFieldStringState('email', e);
	const phoneChange = (e) => formFieldStringState('phone', e);
	const courseChange = (e) => formFieldStringState('course', e);

	// Pushes new applicant to firebase
	const addSubscriber = (newSubscriber) => {
		pivotRequests
			.postSubscriber(newSubscriber)
			.then(() => {
				setSubscriber(defaultSubscriber);
				setIsOpen(true);
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	const submitSubscriptionForm = (e) => {
		e.preventDefault();
		let mySubscriber = { ...subscriber };
		const firstName = mySubscriber.firstName;
		const lastName = mySubscriber.lastName;
		const email = mySubscriber.email;
		const alphabet = /^[A-Za-z ']+$/;
		const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (!firstName.match(alphabet) || !lastName.match(alphabet)) {
			alert(`Invalid symbol(s) in name field.`);
			return;
		}

		if (!email.match(emailFormat)) {
			alert(`${email} is not a valid email address.`);
			return;
		}

		addSubscriber(mySubscriber);
	};

	return (
		<Form>
			<SubscriberModal modal={isOpen} toggle={setIsOpen} />
			<h4 className="footer-header">Stay Informed with Pivot</h4>
			<FormGroup className="name">
				<Input
					type="text"
					name="First Name"
					id="firstName"
					placeholder="First Name"
					onChange={firstNameChange}
					value={subscriber.firstName}
					required={true}
				/>
			</FormGroup>
			<FormGroup className="name">
				<Input
					type="text"
					name="Last Name"
					id="lastName"
					placeholder="Last Name"
					onChange={lastNameChange}
					value={subscriber.lastName}
					required={true}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="text"
					name="phone"
					id="phone"
					placeholder="Phone"
					onChange={phoneChange}
					value={subscriber.phone}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					onChange={emailChange}
					value={subscriber.email}
					required={true}
				/>
			</FormGroup>
			<FormGroup>
				<Input
					type="select"
					name="select"
					id="exampleSelect"
					onChange={courseChange}
					value={subscriber.course}
					required={true}
				>
					<option>Data Analytics</option>
					<option>Web Development</option>
					<option>Cyber Security</option>
				</Input>
			</FormGroup>
			<div className="submit-div">
				<Button onClick={submitSubscriptionForm}>Submit</Button>
			</div>
		</Form>
	);
};

export default StayInformedForm;
