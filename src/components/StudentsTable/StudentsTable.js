import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';

function StudentsTable() {
	const [gridApi, setGridApi] = useState(null);
	const [selectedStudents, setSelectedStudents] = useState([]);
	const [students, setStudents] = useState([]);

	useEffect(() => {
		getStudents();
	}, []);

	const getStudents = () => {
		requests.getStudents().then((results) => {
			setStudents(results);
		});
	};

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedStudents(selectedRows);
		console.log(selectedRows);
	};

	const deleteSelected = () => {
		selectedStudents.forEach((applicant) => {
			requests.deleteApplicant(applicant.uid);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Students</h1>
			</div>
			<div className="actions-container">
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Delete</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 700, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={students}
					rowSelection="multiple"
				>
					<AgGridColumn
						width={300}
						sortable={true}
						filter={true}
						field="firstName"
						headerName="First Name"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="lastName"
						headerName="Last Name"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="email"
						headerName="Email"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="phone"
						headerName="Phone"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="birthday"
						headerName="Birthday"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="techTrack"
						headerName="Tech Track"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="techKnowledge"
						headerName="Tech Knowledge Rating"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="employed"
						headerName="Employed"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="workExperience"
						headerName="Employment Description"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="highestEducation"
						headerName="Highest Education"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="canPayDeposit"
						headerName="Can Pay Deposit"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default StudentsTable;
