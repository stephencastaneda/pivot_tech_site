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
import './AddCourseModal.scss';

const defaultCourse = {
	id: '',
	startDate: '',
	endDate: '',
	courseType: 'Accelerated Part Time',
	courseName: 'Web Development',
	students: [],
};

const AddCourseModal = ({ toggle, modal }) => {
	const [course, setCourse] = useState(defaultCourse);

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		e.persist();
		const tempCourse = { ...course };
		tempCourse[name] = e.target.value;
		setCourse(tempCourse);
	};

	// Form change functions. Updates the course state whenever the user types something new.
	const courseNameChange = (e) => formFieldStringState('courseName', e);
	const startDateChange = (e) => formFieldStringState('startDate', e);
	const endDateChange = (e) => formFieldStringState('endDate', e);
	const courseTypeChange = (e) => formFieldStringState('courseType', e);

	// Pushes new course to firebase
	const addCourse = (newCourse) => {
		pivotRequests
			.postCourse(newCourse)
			.then(() => {
				toggle(); // closes modal
			})
			.catch((err) => console.error('error with applicant post', err));
	};

	// Submits the course to firebase
	const submitCourse = (e) => {
		e.preventDefault();
		const myCourse = { ...course };

		addCourse(myCourse);
		setCourse(defaultCourse);
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Add Course</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="courseName">Name</Label>
							<Input
								type="select"
								name="courseName"
								id="courseName"
								onChange={courseNameChange}
								value={course.courseName}
							>
								<option>Web Development</option>
								<option>Data Analytics</option>
								<option>Cyber Security</option>
							</Input>
						</FormGroup>

						<FormGroup>
							<Label for="startDate">Start Date</Label>
							<Input
								type="date"
								name="startDate"
								id="startDate"
								placeholder="Start Date"
								onChange={startDateChange}
								value={course.startDate}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="endDate">End Date</Label>
							<Input
								type="date"
								name="endDate"
								id="endDate"
								placeholder="End Date"
								onChange={endDateChange}
								value={course.endDate}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="courseType">Type</Label>
							<Input
								type="select"
								name="courseType"
								id="courseType"
								placeholder="Type"
								onChange={courseTypeChange}
								value={course.courseType}
							>
								<option>Accelerated Part Time</option>
								<option>Full Time</option>
								<option>Hybrid</option>
							</Input>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
					<Button color="primary" onClick={submitCourse}>
						Add Course
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default AddCourseModal;
