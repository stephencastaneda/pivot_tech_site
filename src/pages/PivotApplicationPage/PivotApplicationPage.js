import React, { useState } from 'react';
import './PivotApplicationPage.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';
import pivotRequests from '../../helpers/data/pivotRequests';
import moment from 'moment';

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
	courseId: '',
	enrolled: false,
	uid: '',
	date: moment(new Date()).format('LL'),
};

function PivotApplicationPage() {
	const [applicant, setApplicant] = useState(defaultApplicant);
	const [courses, setCourses] = useState([]);

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
	const techTrackChange = (e) => {
		getCourses(e.target.value);
		return formFieldStringState('techTrack', e);
	};
	const whyApplyChange = (e) => formFieldStringState('whyApply', e);
	const courseChange = (e) => formFieldStringState('courseId', e);
	const employedChange = (e) => formFieldStringState('employed', e);
	const workExperienceChange = (e) => formFieldStringState('workExperience', e);
	const highestEducationChange = (e) =>
		formFieldStringState('highestEducation', e);
	const canPayDepositChange = (e) => formFieldStringState('canPayDeposit', e);

	// Pushes new applicant to firebase
	const addApplicant = (newApplicant) => {
		pivotRequests
			.postApplicant(newApplicant)
			.then(() => {
				setApplicant(defaultApplicant);
				window.location.assign('/home');
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Gets all available courses
	const getCourses = (courseName) => {
		pivotRequests
			.getCourses()
			.then((results) => {
				const filteredResults = results.filter(
					(course) => course.courseName === courseName
				);
				setCourses(filteredResults);
			})
			.catch((err) => console.error('error getting courses', err));
	};

	const formatPhoneNumber = (phoneNumberString) => {
		const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
		const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			const intlCode = match[1] ? '+1 ' : '';
			return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
		}
		return null;
	};

	// Validates some fields and then submits the application to firebase
	const submitApplication = (e) => {
		e.preventDefault();
		let myApplicant = { ...applicant };
		const firstName = myApplicant.firstName;
		const lastName = myApplicant.lastName;
		const email = myApplicant.email;
		const phone = myApplicant.phone;
		const birthday = myApplicant.birthday;
		const techKnowledge = myApplicant.techKnowledge;
		const techTrack = myApplicant.techTrack;
		const whyApply = myApplicant.whyApply;
		const employed = myApplicant.employed;
		const workExperience = myApplicant.workExperience;
		const canPayDeposit = myApplicant.canPayDeposit;
		const course = myApplicant.courseId;
		const alphabet = /^[A-Za-z ']+$/;
		const phoneFormat = /^\d{10}$/;
		const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (!firstName.match(alphabet) || !lastName.match(alphabet)) {
			alert(`Invalid symbol(s) in name field.`);
			return;
		}

		if (!email.match(emailFormat)) {
			alert(`${email} is not a valid email address.`);
			return;
		}

		if (phone === '') {
			alert(`Missing value for phone field.`);
			return;
		}

		if (!phone.match(phoneFormat)) {
			alert(`Phone number must 10 digits.`);
			return;
		}

		if (birthday === '') {
			alert(`Missing value for birthday field.`);
			return;
		}

		if (techKnowledge === '') {
			alert(`Missing value for tech knowledge field.`);
			return;
		}

		if (techTrack === '') {
			alert(`Missing value for tech track field.`);
			return;
		}

		if (!course) {
			alert(`Must select a course you'd like to enroll in.`);
			return;
		}

		if (whyApply === '') {
			alert(`Missing a value for why you're applying to Pivot Tech School.`);
			return;
		}

		if (!employed) {
			alert(`Missing a value for employed field.`);
			return;
		}

		if (!workExperience) {
			alert(`Missing a value for work experience.`);
			return;
		}

		if (!canPayDeposit) {
			alert(`Missing a value for if you can pay deposit.`);
			return;
		}

		pivotRequests.getCourseById(applicant.courseId).then((course) => {
			const courseName = course.courseName;
			const courseType = course.courseType;
			const startDate = moment(course.startDate).format('LL');
			const endDate = moment(course.endDate).format('LL');

			myApplicant.birthday = moment(applicant.birthday).format('LL');
			myApplicant.phone = formatPhoneNumber(applicant.phone);

			myApplicant = {
				...applicant,
				courseName,
				courseType,
				startDate,
				endDate,
			};

			addApplicant(myApplicant);
		});
	};

	return (
		<>
			<div className="application-page-container">
				<div className="card application-card mt-5">
					<h1 className="application-title text-center text-white">
						Pivot Tech Application
					</h1>
				</div>
				<Form className="form-container">
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
										required={true}
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
										required={true}
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
										required={true}
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
										required={true}
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
										required={true}
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
							Which course would you like to enroll in?
						</p>
						<FormGroup row>
							<Col sm={10}>
								<Input
									type="select"
									name="course"
									id="course"
									onChange={courseChange}
									value={applicant.courseId}
									required={true}
								>
									<option selected={false}>Select a Course</option>

									{courses.map((course) => (
										<>
											course ? (
											<option value={course.id} key={course.id}>
												{course.courseName}:{' '}
												{moment(course.startDate).format('LL')} -{' '}
												{moment(course.endDate).format('LL')}
											</option>
											) : null;
										</>
									))}
								</Input>
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
									required={true}
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
