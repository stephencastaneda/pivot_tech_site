import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';
import './ScholarshipApplicationPage.scss';

function ScholarshipApplicationPage() {
	return (
		<>
			<div className="scholarship-page-container">
				<div className="card scholarship-card mt-5">
					<h1 className="scholarship-title text-center text-white">
						"The Future of Tech" Scholarship Application
					</h1>
				</div>
				<div className="card programs-text-card mt-5 mb-5">
					<div className="card-body programs-text-card">
						<p className="text-block">
							The Future of Tech scholarship is a $2,500 credit toward the
							recipient’s choice of Pivot Tech School’s Web Development or Data
							Analytics bootcamps, which take place October 27, 2020 – March 11,
							2020. The Future of Tech scholarship is open to persons of all
							walks of life, as we believe diversity is at the core of
							creativity and innovation. ​
						</p>
						<h3 className="bold-text">Scholarship Details:</h3>
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
						<h3 className="bold-text">Eligibility:</h3>
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
								/>
							</FormGroup>
						</Col>
					</Row>

					<p className="question">Select a Program</p>

					<FormGroup tag="fieldset" row>
						<Col sm={10}>
							<FormGroup check>
								<Label check>
									<Input type="radio" name="data-analytics" />
									Data Analytics
								</Label>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="radio" name="web-development" />
									Web Development
								</Label>
							</FormGroup>
						</Col>
					</FormGroup>

					<p className="question">What is your dream career?</p>

					<FormGroup row>
						<Col sm={10}>
							<Input type="textarea" name="why-apply" id="why-apply" />
						</Col>
					</FormGroup>

					<FormGroup check row>
						<Col className="submit-button-div">
							<Button>Submit</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
			<MyFooter />
		</>
	);
}

export default ScholarshipApplicationPage;
