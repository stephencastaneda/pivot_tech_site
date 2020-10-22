import React, { useState } from 'react';
import MyFooter from '../../components/MyFooter/MyFooter';
import './ProgramsPage.scss';
import { Accordion, Card } from 'reactstrap';
import BootcampDropdown from '../../components/BootcampDropdown/BootcampDropdown';

function ProgramsPage() {
	const [programs, setPrograms] = useState([]);
	const [dataAnalytics, setDataAnalytics] = useState({
		id: 1,
		course: 'Data Analytics',
		courses: [
			{
				id: 12,
				name: 'Data Analytics',
				type: 'Accelerated Part Time',
				date: 'November 3, 2020 - May 3, 2021',
			},
		],
	});
	const [webDevelopment, setWebDevelopment] = useState({
		id: 1,
		course: 'Web Development',
		courses: [
			{
				id: 12,
				name: 'Web Development',
				type: 'Accelerated Part Time',
				date: 'November 3, 2020 - May 3, 2021',
			},
		],
	});
	const [cyberSecurity, setCyberSecurity] = useState({
		id: 1,
		course: 'Cyber Security',
		courses: [
			{
				id: 12,
				name: 'Cyber Security',
				type: 'Accelerated Part Time',
				date: 'November 3, 2020 - May 3, 2021',
			},
		],
	});
	const [individualCourse, setIndividualCourse] = useState({
		id: 1,
		course: 'Individual Course Offerings',
		courses: [
			{
				id: 12,
				name: 'Excel for Data Analysis',
				type: 'Individual Course Offering',
			},
			{
				id: 13,
				name: 'SQL for Data Analysis',
				type: 'Individual Course Offering',
			},
		],
	});

	return (
		<div>
			<>
				<div className="programs-page-container">
					<div class="card programs-card-container mt-5">
						<div class="card-body programs-card">
							<h1 className="programs-title text-center text-white">
								Programs
							</h1>
						</div>
					</div>

					<div class="grid-container">
						<div class="card programs-text-card mt-5">
							<div class="card-body programs-text-card">
								<p className="bold-text">Accelerate Part Time Courses</p>
								<p>
									Pivot Tech offers accelerated part time courses for the fields
									of data analytics, web development, and soon cyber security.
									This program option was made with the working professional in
									mind, by providing a flexible and evening based course
									schedule.
								</p>
								<p className="bold-text">Schedule</p>

								<p>Two Evenings: 3 hours of instruction</p>
								<div class="same-line">
									<p>Saturday: 3 hours of group study </p>
									<i>(instructor will be available during lab hours)</i>
								</div>
							</div>
						</div>
					</div>
					<div class="outer-card"></div>
					<BootcampDropdown key={dataAnalytics.id} program={dataAnalytics} />
					<BootcampDropdown key={webDevelopment.id} program={webDevelopment} />
					<BootcampDropdown key={cyberSecurity.id} program={cyberSecurity} />

					<div class="card programs-text-card mt-5 mb-5">
						<div class="card-body programs-text-card">
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
						key={individualCourse.id}
						program={individualCourse}
					/>
				</div>
				<MyFooter />
			</>
		</div>
	);
}

export default ProgramsPage;
