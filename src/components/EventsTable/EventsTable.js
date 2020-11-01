import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import AddEventModal from '../AddEventModal/AddEventModal';

function EventsTable() {
	const [events, setEvents] = useState([]);
	const [modal, setModal] = useState(false);
	const [gridApi, setGridApi] = useState(null);
	const [selectedEvents, setSelectedEvents] = useState([]);

	const toggle = () => {
		setModal(!modal);
	};

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedEvents(selectedRows);
		console.log(selectedRows);
	};

	const deleteSelected = () => {
		selectedEvents.forEach((event) => {
			requests.deleteEvent(event.id);
		});
	};

	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = () => {
		requests.getEvents().then((results) => {
			setEvents(results);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Events</h1>
			</div>
			<div className="actions-container">
				<div onClick={toggle} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/add.png')}
						alt="transition to student"
					/>
					<span>Add Event</span>
				</div>
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Delete Event</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={events}
				>
					<AgGridColumn
						width={300}
						sortable={true}
						filter={true}
						field="eventTitle"
						headerName="Event Title"
						checkboxSelection={true}
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="date"
						headerName="Date"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="time"
						headerName="Time"
					></AgGridColumn>
					<AgGridColumn
						width={400}
						sortable={true}
						filter={true}
						field="description"
						headerName="Description"
					></AgGridColumn>
				</AgGridReact>
			</div>
			<AddEventModal modal={modal} toggle={toggle} />
		</div>
	);
}

export default EventsTable;
