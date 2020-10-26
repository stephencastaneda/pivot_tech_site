import React, { useState } from 'react';
import './PivotApplicationPage.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';
import pivotRequests from '../../helpers/data/pivotRequests';

const defaultApplicant = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	birthday: '',
	techKnowledge: '',
	techTrack: '',
	whyApply: '',
	employed: null,
	workExperience: null,
	highestEducation: null,
	canPayDeposit: null,
	uid: '',
	date: new Date(),
};

function PivotApplicationPage() {
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
	const birthdayChange = (e) => formFieldStringState('birthday', e);
	const techKnowledgeChange = (e) => formFieldStringState('techKnowledge', e);
	const techTrackChange = (e) => formFieldStringState('techTrack', e);
	const whyApplyChange = (e) => formFieldStringState('whyApply', e);
	const employedChange = (e) => formFieldStringState('employed', e);
	const workExperienceChange = (e) => formFieldStringState('workExperience', e);
	const highestEducationChange = (e) =>
		formFieldStringState('highestEducation', e);
	const canPayDepositChange = (e) => formFieldStringState('canPayDeposit', e);

	// pushes new applicant to firebase
	const addApplicant = (newApplicant) => {
		pivotRequests
			.postApplicant(newApplicant)
			.then(() => {
				window.location.assign('/home');
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Validates some fields and then submits the application to firebase
	const submitApplication = (e) => {
		e.preventDefault();
		const myApplicant = { ...applicant };
		const firstName = myApplicant.firstName;
		const lastName = myApplicant.lastName;
		const alphabet = /^[A-Za-z ']+$/;

		if (!firstName.match(alphabet) || !lastName.match(alphabet)) {
			alert(`Invalid symbol(s) in name field.`);
			return;
		}

		addApplicant(myApplicant);
		setApplicant(defaultApplicant);
	};

	return (
		<>
			<div className="application-page-container">
				<div className="card application-card mt-5">
					<h1 className="application-title text-center text-white">
						Pivot Tech Application
					</h1>
				</div>
				<Form>
					<div className="contact-section">
						<div className="application-header">
							<h3>Contact</h3>
						</div>

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

						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label for="birthdate">Birthday</Label>
									<Input
										type="date"
										name="birthday"
										id="birthday"
										placeholder="Date of Birth"
										onChange={birthdayChange}
										value={applicant.birthday}
									/>
								</FormGroup>
							</Col>
						</Row>
					</div>

					<div className="knowledge-section">
						<div className="application-header">
							<h3>Knowledge</h3>
						</div>

						<p className="question">
							How would you rate your knowledge of technology?{' '}
							<i>(There are no wrong answers)</i>
						</p>

						<FormGroup onChange={techKnowledgeChange} tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Not at all" name="knowledge" />
										Not at all
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="A little bit" name="knowledge" />
										A little bit
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Comfortable" name="knowledge" />
										Comfortable
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Proficient" name="knowledge" />
										Proficient
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Expert" name="knowledge" />
										Expert
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<p className="question">
							Which Pivot Tech Track are you most interested in?
						</p>

						<FormGroup onChange={techTrackChange} tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input
											type="radio"
											value="Data Analytics"
											name="course-track"
										/>
										Data Analytics
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type="radio"
											value="Web Development"
											name="course-track"
										/>
										Web Development
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type="radio"
											value="All Women's Data Analytics"
											name="course-track"
										/>
										All Women's Data Analytics
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<p className="question">
							Why are you applying to Pivot Tech School?
						</p>

						<FormGroup row>
							<Col sm={10}>
								<Input
									onChange={whyApplyChange}
									value={applicant.whyApply}
									type="textarea"
									name="why-apply"
									id="why-apply"
								/>
							</Col>
						</FormGroup>

						<p className="question">Currently Employed?</p>

						<FormGroup onChange={employedChange} tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Yes" name="employed" />
										Yes
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="No" name="employed" />
										No
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<p className="question">
							Please provide a brief description of your previous work
							experience/background.
						</p>

						<FormGroup row>
							<Col sm={10}>
								<Input
									onChange={workExperienceChange}
									value={applicant.workExperience}
									type="textarea"
									name="why-apply"
									id="why-apply"
								/>
							</Col>
						</FormGroup>

						<p className="question">
							Please provide your highest level of education achieved.
						</p>
						<FormGroup row>
							<Col sm={10}>
								<Input
									type="select"
									name="highest-education"
									id="highest-education"
									onChange={highestEducationChange}
									value={applicant.highestEducation}
								>
									<option>High School Diploma</option>
									<option>Bachelor's Degree</option>
									<option>Master's Degree</option>
									<option>Doctorate Degree or higher</option>
								</Input>
							</Col>
						</FormGroup>

						<p className="question">
							If accepted, are you ready and able to pay your deposit to secure
							your seat?
						</p>

						<FormGroup onChange={canPayDepositChange} tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="Yes" name="deposit" />
										Yes
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" value="No" name="deposit" />
										No
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type="radio"
											value="Need Financial Assistance"
											name="need-assistance"
										/>
										I need financial assistance
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<FormGroup check row>
							<Col className="submit-button-div">
								<Button onClick={submitApplication}>Submit</Button>
							</Col>
						</FormGroup>
					</div>
				</Form>
			</div>
			<MyFooter />
		</>
	);
}

export default PivotApplicationPage;
