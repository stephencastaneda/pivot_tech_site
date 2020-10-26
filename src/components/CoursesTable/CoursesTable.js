import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function CoursesTable({ rowData }) {
	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Courses</h1>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 700, width: '100%' }}
			>
				<AgGridReact rowData={rowData}>
					<AgGridColumn
						width={300}
						sortable={true}
						filter={true}
						field="First Name"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Last Name"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Email"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Phone"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Birthday"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Tech Track"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Tech Knowledge Rating"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Employed"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Employment Description"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Highest Education"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="Can Pay Deposit"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default CoursesTable;
