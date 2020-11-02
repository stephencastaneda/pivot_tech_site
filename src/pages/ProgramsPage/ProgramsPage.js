import React, { useEffect, useState } from 'react';
import MyFooter from '../../components/MyFooter/MyFooter';
import './ProgramsPage.scss';
import BootcampDropdown from '../../components/BootcampDropdown/BootcampDropdown';
import requests from '../../helpers/data/pivotRequests';

function ProgramsPage() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		requests.getCourses().then((results) => {
			setCourses(results);
		});
	}, []);

	const dataAnalyticsCourses = courses.filter(
		(course) => course.courseName === 'Data Analytics'
	);
	const webDevCourses = courses.filter(
		(course) => course.courseName === 'Web Development'
	);
	const cyberSecurityCourses = courses.filter(
		(course) => course.courseName === 'Cyber Security'
	);

	const individualCourses = [
		{
			id: 12,
			courseName: 'Excel for Data Analysis',
			courseType: 'Individual Course Offering',
		},
		{
			id: 13,
			courseName: 'SQL for Data Analysis',
			courseType: 'Individual Course Offering',
		},
	];

	return (
		<>
			<div className="programs-page-container">
				<div className="card programs-card-container mt-5">
					<div className="card-body programs-card">
						<h1 className="programs-title text-center text-white">Programs</h1>
					</div>
				</div>

				<div className="grid-container">
					<div className="card programs-text-card mt-5">
						<div className="card-body programs-text-card">
							<p className="bold-text">Accelerate Part Time Courses</p>
							<p>
								Pivot Tech offers accelerated part time courses for the fields
								of data analytics, web development, and soon cyber security.
								This program option was made with the working professional in
								mind, by providing a flexible and evening based course schedule.
							</p>
							<p className="bold-text">Schedule</p>

							<p>Two Evenings: 3 hours of instruction</p>
							<div className="same-line">
								<p>Saturday: 3 hours of group study </p>
								<i>(instructor will be available during lab hours)</i>
							</div>
						</div>
					</div>
				</div>
				<div className="outer-card"></div>
				<BootcampDropdown
					key={1}
					name={'Data Analytics'}
					courses={dataAnalyticsCourses}
				/>
				<BootcampDropdown
					key={2}
					name={'Web Development'}
					courses={webDevCourses}
				/>
				<BootcampDropdown
					key={3}
					name={'Cyber Security'}
					courses={cyberSecurityCourses}
				/>

				<div className="card programs-text-card mt-5 mb-5">
					<div className="card-body programs-text-card">
						<p className="bold-text">Individual Course Offerings</p>
						<p>
							Pivot Tech offers individual courses for the field of data
							analytics. These courses consist of multilple videos that will
							allow the user to easily follow along and gain a new skillset in
							the process.
						</p>
					</div>
				</div>
				<BootcampDropdown
					key={4}
					name="Individual Courses"
					courses={individualCourses}
				/>
			</div>
			<MyFooter />
		</>
	);
}

export default ProgramsPage;
