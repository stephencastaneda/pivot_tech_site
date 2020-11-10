import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';
import './ScholarshipApplicationPage.scss';
import moment from 'moment';
import pivotRequests from '../../helpers/data/pivotRequests';

const defaultApplicant = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	program: '',
	dreamCareer: '',
	date: moment(new Date()).format('LL'),
};

function ScholarshipApplicationPage() {
	const [applicant, setApplicant] = useState(defaultApplicant);

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		e.persist();
		const tempApplicant = { ...applicant };
		tempApplicant[name] = e.target.value;
		setApplicant(tempApplicant);
	};

	// Form change functions. Updates the applicant state whenever the user types something new.
	const firstNameChange = (e) => formFieldStringState('firstName', e);
	const lastNameChange = (e) => formFieldStringState('lastName', e);
	const emailChange = (e) => formFieldStringState('email', e);
	const phoneChange = (e) => formFieldStringState('phone', e);
	const programChange = (e) => formFieldStringState('program', e);
	const dreamCareerChange = (e) => formFieldStringState('dreamCareer', e);

	// Pushes new applicant to firebase
	const addApplicant = (newApplicant) => {
		pivotRequests
			.postScholarship(newApplicant)
			.then(() => {
				setApplicant(defaultApplicant);
				window.location.assign('/home');
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Validates some fields and then submits the application to firebase
	const submitApplication = (e) => {
		e.preventDefault();
		let myApplicant = { ...applicant };
		const firstName = myApplicant.firstName;
		const lastName = myApplicant.lastName;
		const alphabet = /^[A-Za-z ']+$/;

		if (!firstName.match(alphabet) || !lastName.match(alphabet)) {
			alert(`Invalid symbol(s) in name field.`);
			return;
		}

		addApplicant(myApplicant);
	};

	return (
		<>
			<div className="scholarship-page-container">
				<div className="card scholarship-card mt-5">
					<h1 className="scholarship-title text-center text-white">
						"The Future of Tech" Scholarship Application
					</h1>
				</div>
				<div>
					<div className="card-body programs-text-card">
						<h3 className="bold-text">What is it?</h3>
						<hr></hr>
						<p className="text-block">
							The Future of Tech scholarship is a $2,500 credit toward the
							recipient’s choice of Pivot Tech School’s Web Development or Data
							Analytics bootcamps, which take place October 27, 2020 – March 11,
							2020. The Future of Tech scholarship is open to persons of all
							walks of life, as we believe diversity is at the core of
							creativity and innovation. ​
						</p>
						<h3 className="bold-text">Scholarship Details</h3>
						<hr></hr>
						<p className="info-bullet">
							• Scholarship amount: $2,500 for one 20-week bootcamp in the
							recipient’s choice of Web Development or Data Analytics.
						</p>
						<p className="info-bullet">
							• Deposit required: Recipient must deposit $1,000 in full no later
							than October 27, 2020.
						</p>
						<p className="info-bullet">
							• The remainder of the recipient’s tuition ($3,000) must be raised
							via their circle of influence and is due one month prior to
							graduation.
						</p>
						<p className="info-bullet">
							• Deadline to submit scholarship application is October 9, 2020.
						</p>
						<p className="info-bullet">
							• Job placement assistance upon recipient’s graduation from Pivot
							Tech School.
						</p>
						<p className="info-bullet">
							• Scholarship applicants will be notified via email no later than
							October 12, 2020.
						</p>
						<h3 className="bold-text">Eligibility</h3>
						<hr></hr>
						<p>
							Complete the Partner with Pivot form for a more personalized
							partnership.{' '}
						</p>
						<p className="info-bullet">
							• Complete the Partner with Pivot form for a more personalized
							partnership.
						</p>
					</div>
				</div>
				<div className="application-header">
					<h3>Apply Now!</h3>
				</div>
				<Form className="form-container">
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="firstName">First Name</Label>
								<Input
									type="text"
									name="firstName"
									id="firstName"
									placeholder="First Name"
									onChange={firstNameChange}
									value={applicant.firstName}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="lastName">Last Name</Label>
								<Input
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Last Name"
									onChange={lastNameChange}
									value={applicant.lastName}
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									onChange={emailChange}
									value={applicant.email}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="examplePassword">Phone Number</Label>
								<Input
									type="phone"
									name="phone"
									id="phone"
									placeholder="Phone Number"
									onChange={phoneChange}
									value={applicant.phone}
								/>
							</FormGroup>
						</Col>
					</Row>

					<p className="question">Select a Program</p>

					<FormGroup onChange={programChange} tag="fieldset" row>
						<Col sm={10}>
							<FormGroup check>
								<Label check>
									<Input type="radio" name="program" value="Data Analytics" />
									Data Analytics
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" name="program" value="Web Development" />
									Web Development
								</Label>
							</FormGroup>
						</Col>
					</FormGroup>

					<p className="question">What is your dream career?</p>

					<Col md={6}>
						<FormGroup row>
							<Input
								type="textarea"
								name="dreamCareer"
								id="dream-career"
								onChange={dreamCareerChange}
								value={applicant.dreamCareer}
							/>
						</FormGroup>
					</Col>

					<FormGroup check row>
						<Col className="submit-button-div">
							<Button onClick={submitApplication}>Submit</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
			<MyFooter />
		</>
	);
}

export default ScholarshipApplicationPage;
