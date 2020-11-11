import React from 'react';
import { Button } from 'reactstrap';
import './IndividualCourseCard.scss';
import moment from 'moment';

function IndividualCourseCard({ course }) {
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
				<Button
					className="course-button"
					onClick={() => (window.location.href = pageString)}
				>
					Go to Course
				</Button>
			</div>
		</div>
	);
}

export default IndividualCourseCard;
