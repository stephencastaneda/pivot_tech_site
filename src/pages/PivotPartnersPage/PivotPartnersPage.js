import React, { useState } from 'react';
import './PivotPartnersPage.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';
import pivotRequests from '../../helpers/data/pivotRequests';
import moment from 'moment';

const defaultPartner = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	company: '',
	whyPartner: '',
	date: moment(new Date()).format('LL'),
};

function PivotPartnersPage() {
	const [partner, setPartner] = useState(defaultPartner);

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		e.persist();
		const tempPartner = { ...partner };
		tempPartner[name] = e.target.value;
		setPartner(tempPartner);
	};

	// Form change functions. Updates the applicant state whenever the user types something new.
	const firstNameChange = (e) => formFieldStringState('firstName', e);
	const lastNameChange = (e) => formFieldStringState('lastName', e);
	const emailChange = (e) => formFieldStringState('email', e);
	const phoneChange = (e) => formFieldStringState('phone', e);
	const companyChange = (e) => formFieldStringState('company', e);
	const whyPartnerChange = (e) => formFieldStringState('whyPartner', e);

	// Pushes new partner to firebase
	const addPartner = (newPartner) => {
		pivotRequests
			.postPartner(newPartner)
			.then(() => {
				setPartner(defaultPartner);
				window.location.assign('/home');
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Validates some fields and then submits the application to firebase
	const submitApplication = (e) => {
		e.preventDefault();
		let myPartner = { ...partner };
		const firstName = myPartner.firstName;
		const lastName = myPartner.lastName;
		const alphabet = /^[A-Za-z ']+$/;

		if (!firstName.match(alphabet) || !lastName.match(alphabet)) {
			alert(`Invalid symbol(s) in name field.`);
			return;
		}

		addPartner(myPartner);
	};

	return (
		<>
			<div className="partner-page-container">
				<div className="card partner-card mt-5">
					<h1 className="partner-title text-center text-white">
						Become a Pivot Tech Partner
					</h1>
				</div>
				<div className="card programs-text-card mt-5 mb-5">
					<div className="card-body programs-text-card">
						<div class="quote-div">
							<img
								className="mundy-pic"
								src="https://static.wixstatic.com/media/8a0dcf_a18daa7a30b14717bec63e5235cbc53d~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01/joshua%20mundy_jfif.webp"
								alt="Josh Mundy"
							/>
							<p className="text-block">
								"There are less than 3% of minorities that have Tech careers and
								we want to change that paradigm and create pipelines of highly
								trained talent to these organizations,” Mundy explained. “We
								want to expose as many adults as possible to coding and data
								analytics.”
								<div class="quote-person">
									<p>- Joshua Mundy</p>
									<i>Pivot Tech CEO</i>
								</div>
							</p>
						</div>
						<h3 className="bold-text">
							Pivot Tech School is seeking the follow:
						</h3>
						<p className="info-bullet">• Corporate Partners</p>
						<p className="info-bullet">
							• Scholarships (Individual or corporate)
						</p>
						<p className="info-bullet">• Mentors</p>

						<p className="bold-sentence">
							We would like to partner with you to close this talent gap while
							also creating opportunities for minorities to begin playing a
							major role in the technology space.{' '}
						</p>

						<p className="info-bullet">• Tuition for one student $6,500</p>
						<p className="info-bullet">• One Cohort 15 students $97,500</p>

						<p className="bold-sentence">
							We are seeking scholarships to help remove the the financial
							barriers that prevent prospective minority students from gaining
							tech skills.
						</p>

						<h3 className="bold-text">
							If you are interested in contributing towards a scholarship we
							have the following options:
						</h3>

						<p className="info-bullet">
							• Contribute to the Scholarship pool via the link below.
						</p>
						<p className="info-bullet">
							• Provide one full scholarship for $6,500 via the link below.
						</p>
						<p className="info-bullet">
							• Complete the Partner with Pivot form for a more personalized
							partnership.
						</p>

						<div class="sponsor-student-div">
							<Button>SPONSOR A STUDENT</Button>
							<p className="bold-sentence">
								Select Contribute today and your donation will be applied
								towards the Scholarship Pool.
							</p>
						</div>
						<p className="bold-sentence">
							If you are interested in a more information regarding partnering
							with Pivot Tech School please complete the form below.
						</p>
					</div>
				</div>
				<div className="application-header">
					<h3>Partner with Pivot Tech</h3>
				</div>
				<Form>
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
									value={partner.firstName}
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
									value={partner.lastName}
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
									value={partner.email}
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
									value={partner.phone}
								/>
							</FormGroup>
						</Col>
					</Row>

					<p className="question">Company</p>

					<Col md={6}>
						<FormGroup row>
							<Input
								type="text"
								name="company"
								id="company"
								placeholder="Company"
								onChange={companyChange}
								value={partner.company}
							/>
						</FormGroup>
					</Col>

					<p id="why-partner">How would you like to partner?</p>
					<i>Select all that apply</i>

					<FormGroup
						id="all-that-apply"
						onChange={whyPartnerChange}
						tag="fieldset"
						row
					>
						<Col sm={10}>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="whyPartner"
										value="Sponsor a Student"
									/>
									Sponsor a Student
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="whyPartner"
										value="Partner to Hire Talent"
									/>
									Partner to Hire Talent
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="whyPartner"
										value="Become a Mentor"
									/>
									Become a Mentor
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type="radio"
										name="whyPartner"
										value="Work w/ Pivot Community Initiatives"
									/>
									Work w/ Pivot Community Initiatives
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" name="whyPartner" value="Other" />
									Other
								</Label>
							</FormGroup>
						</Col>
					</FormGroup>

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

export default PivotPartnersPage;
