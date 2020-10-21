import React from 'react';
import './StayInformedForm.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const StayInformedForm = (props) => {
	return (
		<Form>
			<h4>Stay Informed with Pivot</h4>
			<div className="names-container">
				<FormGroup className="name">
					<Input
						type="text"
						name="First Name"
						id="firstName"
						placeholder="First Name"
					/>
				</FormGroup>
				<FormGroup className="name">
					<Input
						type="text"
						name="Last Name"
						id="lastName"
						placeholder="Last Name"
					/>
				</FormGroup>
			</div>
			<FormGroup>
				<Input type="text" name="phone" id="phone" placeholder="Phone" />
			</FormGroup>
			<FormGroup>
				<Input type="email" name="email" id="email" placeholder="Email" />
			</FormGroup>
			<FormGroup>
				<Input type="select" name="select" id="exampleSelect">
					<option>Data Analytics</option>
					<option>Web Development</option>
					<option>Cyber Security</option>
				</Input>
			</FormGroup>
			<div class="submit-div">
				<Button>Submit</Button>
			</div>
		</Form>
	);
};

export default StayInformedForm;
