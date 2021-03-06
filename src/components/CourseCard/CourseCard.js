import React from 'react';
import { Button } from 'reactstrap';
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
		'Excel for Data Analysis':
			'https://courses.pivottechschool.com/p/excel-for-data-analysis',
		'SQL for Data Analysis':
			'https://courses.pivottechschool.com/p/sql-for-data-analysis',
	};

	let pageString = courseObject[name];

	return (
		<div className="program-card">
			<h4>{name}</h4>
			<div className="card-text">
				<span>{type}</span>
				{type !== 'Individual Course Offering' ? (
					<span>
						{startDate} - {endDate}
					</span>
				) : null}
			</div>
			<div className="card-button-div">
				<Button className="course-button" tag={Link} href={pageString}>
					Learn More
				</Button>
				<Button className="course-button" tag={Link} href="pivot-application">
					Apply Now
				</Button>
			</div>
		</div>
	);
}

export default CourseCard;
