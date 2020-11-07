import React, { useState } from 'react';
import './AdminSideBar.scss';

function AdminSideBar({
	setApplicantsView,
	setCoursesView,
	setEventsView,
	setPartnersView,
	setScholarshipsView,
}) {
	const [applicantsActive, setApplicantsActive] = useState(true);
	const [coursesActive, setCoursesActive] = useState(false);
	const [eventsActive, setEventsActive] = useState(false);
	const [partnersActive, setPartnersActive] = useState(false);
	const [scholarshipsActive, setScholarshipsActive] = useState(false);

	const resetTabs = () => {
		setApplicantsActive(false);
		setCoursesActive(false);
		setEventsActive(false);
		setPartnersActive(false);
		setScholarshipsActive(false);
	};

	const navToApplicants = () => {
		setApplicantsView(true);
		setCoursesView(false);
		setEventsView(false);
		setPartnersView(false);
		setScholarshipsView(false);
	};
	const navToCourses = () => {
		setCoursesView(true);
		setApplicantsView(false);
		setEventsView(false);
		setPartnersView(false);
		setScholarshipsView(false);
	};
	const navToEvents = () => {
		setEventsView(true);
		setApplicantsView(false);
		setCoursesView(false);
		setPartnersView(false);
		setScholarshipsView(false);
	};
	const navToPartners = () => {
		setPartnersView(true);
		setApplicantsView(false);
		setCoursesView(false);
		setEventsView(false);
		setScholarshipsView(false);
	};

	const navToScholarships = () => {
		setScholarshipsView(true);
		setApplicantsView(false);
		setCoursesView(false);
		setEventsView(false);
		setPartnersView(false);
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
		if (id === 'partners') {
			resetTabs();
			setPartnersActive(true);
			navToPartners();
		}
		if (id === 'scholarships') {
			resetTabs();
			setScholarshipsActive(true);
			navToScholarships();
		}
	};

	return (
		<div className="sidebar-container">
			<div className="tab-container" id="applicants">
				<div
					className={applicantsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="applicants"
					onClick={setActiveTab}
				>
					<h2 id="applicants">Applicants</h2>
				</div>
				<div
					className={coursesActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="courses"
					onClick={setActiveTab}
				>
					<h2 id="courses">Courses</h2>
				</div>
				<div
					className={eventsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="events"
					onClick={setActiveTab}
				>
					<h2 id="events">Events</h2>
				</div>
				<div
					className={partnersActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="partners"
					onClick={setActiveTab}
				>
					<h2 id="partners">Partners</h2>
				</div>
				<div
					className={scholarshipsActive ? 'active-sidebar-tab' : 'sidebar-tab'}
					id="scholarships"
					onClick={setActiveTab}
				>
					<h2 id="scholarships">Scholarships</h2>
				</div>
			</div>
		</div>
	);
}

export default AdminSideBar;
