import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './BootcampDropdown.scss';
import CourseCard from '../CourseCard/CourseCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IndividualCourseCard from '../IndividualCourseCard/IndividualCourseCard';

const BootcampDropdown = ({ courses, name }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const excel = 'Excel for Data Analysis';
	const sql = 'SQL for Data Analysis';
	const courseList = courses.map((course) => {
		if (course.courseName === excel || course.courseName === sql) {
			return <IndividualCourseCard key={course.id} course={course} />;
		} else {
			return <CourseCard key={course.id} course={course} />;
		}
	});

	const arrow = isOpen ? 'arrow-up' : 'arrow-down';

	return (
		<>
			<Card
				className="selector"
				onClick={toggle}
				style={{
					backgroundColor: '#ef8c35',
					color: 'white',
					marginTop: '30px',
					height: '70px',
					padding: '15px',
				}}
			>
				<div className="name-and-arrow">
					<h3>{name}</h3>
					<ArrowForwardIosIcon className={arrow} />
				</div>
			</Card>
			<Collapse isOpen={isOpen}>
				<Card className="course-card-container">
					{courses.length > 0 ? (
						<div className="body-container">
							<CardBody className="the-body">{courseList}</CardBody>
						</div>
					) : (
						<CardBody className="the-body" style={{ height: '80px' }}>
							<h3 style={{ color: 'white' }}>Courses coming soon</h3>
						</CardBody>
					)}
				</Card>
			</Collapse>
		</>
	);
};

export default BootcampDropdown;
