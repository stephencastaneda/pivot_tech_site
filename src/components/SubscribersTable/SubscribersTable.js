import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import './SubscribersTable.scss';

function SubscribersTable() {
	const [gridApi, setGridApi] = useState(null);
	const [subscribers, setSubscribers] = useState([]);
	const [selectedSubscribers, setSelectedSubscribers] = useState([]);

	useEffect(() => {
		getSubscribers();
	}, []);

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedSubscribers(selectedRows);
	};

	const getSubscribers = () => {
		requests.getSubscribers().then((results) => {
			setSubscribers(results);
		});
	};

	const deleteSelected = () => {
		selectedSubscribers.forEach((subscriber) => {
			requests.deleteSubscriber(subscriber.id);
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
					<span>Delete Subscriber</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={subscribers}
					modules={[RangeSelectionModule]}
					enableRangeSelection={true}
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
						field="course"
						headerName="Program"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default SubscribersTable;
