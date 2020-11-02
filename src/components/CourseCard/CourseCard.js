import React from 'react';
import { Button, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-bootstrap/lib/Navbar';
import './CourseCard.scss';
import moment from 'moment';

function CourseCard({ course }) {
	const name = course.courseName;
	const type = course.courseType;
	const startDate = moment(course.startDate).format('LL');
	const endDate = moment(course.endDate).format('LL');

	const courseObject = {
		'Web Development': 'web-development',
		'Data Analytics': 'data-analytics',
		'Cyber Security': 'cyber-security',
	};

	let pageString = courseObject[name];

	return (
		<Card className="program-card" body>
			<CardTitle>
				<h4>{name}</h4>
			</CardTitle>
			<CardText>
				<div className="card-text">
					<span>Type: {type}</span>
					{type !== 'Individual Course Offering' ? (
						<span>
							Date: {startDate} - {endDate}
						</span>
					) : null}
				</div>
			</CardText>
			<div className="card-button-div">
				<Button className="course-button" tag={Link} href={pageString}>
					Learn More
				</Button>
				<Button className="course-button" tag={Link} href="pivot-application">
					Apply Now
				</Button>
			</div>
		</Card>
	);
}

export default CourseCard;
