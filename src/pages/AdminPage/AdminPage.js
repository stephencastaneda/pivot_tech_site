import React, { useState } from 'react';
import './AdminPage.scss';
import MyFooter from '../../components/MyFooter/MyFooter';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ApplicantsTable from '../../components/ApplicantsTable/ApplicantsTable';
import CoursesTable from '../../components/CoursesTable/CoursesTable';
import EventsTable from '../../components/EventsTable/EventsTable';
import StudentsTable from '../../components/StudentsTable/StudentsTable';

function AdminPage() {
	const [gridApi, setGridApi] = useState(null);
	const [gridColumnApi, setGridColumnApi] = useState(null);
	const [applicantsView, setApplicantsView] = useState(true);
	const [coursesView, setCoursesView] = useState(false);
	const [eventsView, setEventsView] = useState(false);
	const [studentsView, setStudentsView] = useState(false);

	const [rowData, setRowData] = useState([
		{ 'First Name': 'Austin', model: 'Celica', price: 35000 },
	]);

	return (
		<>
			<div className="admin-page-container">
				<AdminSideBar
					setApplicantsView={setApplicantsView}
					setCoursesView={setCoursesView}
					setEventsView={setEventsView}
					setStudentsView={setStudentsView}
				/>
				<div className="main-container">
					{applicantsView ? <ApplicantsTable rowData={rowData} /> : null}
					{coursesView ? <CoursesTable rowData={rowData} /> : null}
					{eventsView ? <EventsTable rowData={rowData} /> : null}
					{studentsView ? <StudentsTable rowData={rowData} /> : null}
				</div>
			</div>
			<MyFooter />
		</>
	);
}

export default AdminPage;
