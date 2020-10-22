import React from 'react';
import { Button, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-bootstrap/lib/Navbar';
import './CourseCard.scss';

function CourseCard(props) {
	const name = props.course.name;
	const type = props.course.type;
	const date = props.course.date;

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
					{date ? <span>Date: {date}</span> : null}
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
