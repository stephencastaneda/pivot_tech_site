import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import moment from 'moment';
import './ScholarshipTable.scss';

function ScholarshipTable() {
	const [gridApi, setGridApi] = useState(null);
	const [scholarships, setScholarships] = useState([]);
	const [selectedScholarships, setSelectedScholarships] = useState([]);

	useEffect(() => {
		getScholarships();
	}, []);

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedScholarships(selectedRows);
	};

	const getScholarships = () => {
		requests.getScholarships().then((results) => {
			results.forEach((scholarship) => {
				scholarship.date = moment(scholarship.startDate).format('LL');
			});
			setScholarships(results);
		});
	};

	const deleteSelected = () => {
		selectedScholarships.forEach((scholarship) => {
			requests.deleteScholarship(scholarship.id);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Scholarships</h1>
			</div>
			<div className="actions-container">
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Remove Applicant</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={scholarships}
					modules={[RowGroupingModule, RangeSelectionModule]}
					rowSelection="multiple"
					autoGroupColumnDef={{ minWidth: 250 }}
					defaultColDef={{ resizable: true }}
				>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="firstName"
						headerName="First Name"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="lastName"
						headerName="Last Name"
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="email"
						headerName="Email"
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="phone"
						headerName="Phone"
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="program"
						headerName="Program"
					></AgGridColumn>
					<AgGridColumn
						sortable={true}
						filter={true}
						field="dreamCareer"
						headerName="Dream Career"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default ScholarshipTable;
