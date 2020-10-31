import React, { useState } from 'react';
import './AdminPage.scss';
import MyFooter from '../../components/MyFooter/MyFooter';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ApplicantsTable from '../../components/ApplicantsTable/ApplicantsTable';
import CoursesTable from '../../components/CoursesTable/CoursesTable';
import EventsTable from '../../components/EventsTable/EventsTable';
import StudentsTable from '../../components/StudentsTable/StudentsTable';
import AccessModal from '../../components/AccessModal/AccessModal';
import { Spinner } from 'reactstrap';

function AdminPage({ isAuthed, isPending }) {
	const [applicantsView, setApplicantsView] = useState(true);
	const [coursesView, setCoursesView] = useState(false);
	const [eventsView, setEventsView] = useState(false);
	const [studentsView, setStudentsView] = useState(false);

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
									setStudentsView={setStudentsView}
								/>
								<div className="main-container">
									{studentsView ? <StudentsTable /> : null}
									{applicantsView ? <ApplicantsTable /> : null}
									{coursesView ? <CoursesTable /> : null}
									{eventsView ? <EventsTable /> : null}
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