import React, { useState } from 'react';
import './AdminPage.scss';
import MyFooter from '../../components/MyFooter/MyFooter';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ApplicantsTable from '../../components/ApplicantsTable/ApplicantsTable';
import CoursesTable from '../../components/CoursesTable/CoursesTable';
import EventsTable from '../../components/EventsTable/EventsTable';
import PartnersTable from '../../components/PartnersTable/PartnersTable';
import ScholarshipTable from '../../components/ScholarshipTable/ScholarshipTable';
import AccessModal from '../../components/AccessModal/AccessModal';
import { Spinner, Button } from 'reactstrap';
import SubscribersTable from '../../components/SubscribersTable/SubscribersTable';

function AdminPage({ isAuthed, isPending, userObject, toggle }) {
	const [applicantsView, setApplicantsView] = useState(true);
	const [coursesView, setCoursesView] = useState(false);
	const [eventsView, setEventsView] = useState(false);
	const [partnersView, setPartnersView] = useState(false);
	const [scholarshipsView, setScholarshipsView] = useState(false);
	const [subscribersView, setSubscribersView] = useState(false);

	return (
		<>
			{isPending ? (
				<>
					<div className="loading-container">
						<Spinner style={{ width: '5rem', height: '5rem' }} />{' '}
					</div>
				</>
			) : (
				<>
					{isAuthed ? (
						<>
							{' '}
							<div className="admin-page-container">
								<AdminSideBar
									setApplicantsView={setApplicantsView}
									setCoursesView={setCoursesView}
									setEventsView={setEventsView}
									setPartnersView={setPartnersView}
									setScholarshipsView={setScholarshipsView}
									setSubscribersView={setSubscribersView}
								/>
								<div className="main-container">
									<div className="add-user-container">
										{userObject && userObject.firstName ? (
											<span>Hello, {userObject.firstName}!</span>
										) : null}
										{/* <Button onClick={toggle}>Create New Admin User</Button> */}
									</div>
									{applicantsView ? <ApplicantsTable /> : null}
									{coursesView ? <CoursesTable /> : null}
									{eventsView ? <EventsTable /> : null}
									{partnersView ? <PartnersTable /> : null}
									{scholarshipsView ? <ScholarshipTable /> : null}
									{subscribersView ? <SubscribersTable /> : null}
								</div>
							</div>
							<MyFooter />{' '}
						</>
					) : (
						<AccessModal modal={!isAuthed} />
					)}
				</>
			)}
		</>
	);
}

export default AdminPage;
