import React, { useState } from 'react';
import './AdminSideBar.scss';

function AdminSideBar({
	setApplicantsView,
	setCoursesView,
	setEventsView,
	setStudentsView,
}) {
	const [applicantsActive, setApplicantsActive] = useState(true);
	const [coursesActive, setCoursesActive] = useState(false);
	const [eventsActive, setEventsActive] = useState(false);
	const [studentsActive, setStudentsActive] = useState(false);

	const resetTabs = () => {
		setApplicantsActive(false);
		setCoursesActive(false);
		setEventsActive(false);
		setStudentsActive(false);
	};

	const navToApplicants = () => {
		setApplicantsView(true);
		setCoursesView(false);
		setEventsView(false);
		setStudentsView(false);
	};
	const navToCourses = () => {
		setCoursesView(true);
		setApplicantsView(false);
		setEventsView(false);
		setStudentsView(false);
	};
	const navToEvents = () => {
		setEventsView(true);
		setApplicantsView(false);
		setCoursesView(false);
		setStudentsView(false);
	};
	const navToStudents = () => {
		setStudentsView(true);
		setApplicantsView(false);
		setCoursesView(false);
		setEventsView(false);
	};

	const setActiveTab = (e) => {
		let id = e.target.getAttribute('id');

		if (id === 'applicants') {
			resetTabs();
			setApplicantsActive(true);
			navToApplicants();
		}
		if (id === 'courses') {
			resetTabs();
			setCoursesActive(true);
			navToCourses();
		}
		if (id === 'events') {
			resetTabs();
			setEventsActive(true);
			navToEvents();
		}
		if (id === 'students') {
			resetTabs();
			setStudentsActive(true);
			navToStudents();
		}
	};

	return (
		<div className="sidebar-container">
			<div className="tab-container">
				<div
					className={applicantsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="applicants"
					onClick={setActiveTab}
				>
					<h2>Applicants</h2>
				</div>
				<div
					className={studentsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="students"
					onClick={setActiveTab}
				>
					<h2>Students</h2>
				</div>
				<div
					className={coursesActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="courses"
					onClick={setActiveTab}
				>
					<h2>Courses</h2>
				</div>
				<div
					className={eventsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="events"
					onClick={setActiveTab}
				>
					<h2>Events</h2>
				</div>
			</div>
		</div>
	);
}

export default AdminSideBar;
