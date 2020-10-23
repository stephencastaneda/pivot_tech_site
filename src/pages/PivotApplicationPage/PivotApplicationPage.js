import React from 'react';
import './PivotApplicationPage.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';

function PivotApplicationPage() {
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
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label for="birthdate">Birthday</Label>
									<Input
										type="date"
										name="birthdate"
										id="birthdate"
										placeholder="Date of Birth"
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

						<FormGroup tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Not at all
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />A little bit
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Comfortable
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Proficient
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Expert
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<p className="question">
							Which Pivot Tech Track are you most interested in?
						</p>

						<FormGroup tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Data Analytics
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
										Web Development
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="radio2" />
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
								<Input type="textarea" name="why-apply" id="why-apply" />
							</Col>
						</FormGroup>

						<p className="question">Currently Employed?</p>

						<FormGroup tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="yes" />
										Yes
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="no" />
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
								<Input type="textarea" name="why-apply" id="why-apply" />
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

						<FormGroup tag="fieldset" row>
							<Col sm={10}>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="yes" />
										Yes
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="no" />
										No
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" name="need-assistance" />I need
										financial assistance
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>

						<FormGroup check row>
							<Col className="submit-button-div">
								<Button>Submit</Button>
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
