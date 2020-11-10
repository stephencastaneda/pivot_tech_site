import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import './BootcampDropdown.scss';
import CourseCard from '../CourseCard/CourseCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const BootcampDropdown = ({ courses, name }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const courseList = courses.map((course) => (
		<CourseCard key={course.id} course={course} />
	));

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
						<div class="body-container">
							<CardBody className="the-body">{courseList}</CardBody>
						</div>
					) : (
						<CardBody classname="the-body">
							<h3 style={{ color: 'white' }}>Courses coming soon</h3>
						</CardBody>
					)}
				</Card>
			</Collapse>
		</>
	);
};

export default BootcampDropdown;
