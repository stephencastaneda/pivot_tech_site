import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import moment from 'moment';
import './PartnersTable.scss';

function PartnerTable() {
	const [gridApi, setGridApi] = useState(null);
	const [partners, setPartners] = useState([]);
	const [selectedPartners, setSelectedPartners] = useState([]);

	useEffect(() => {
		getPartners();
	}, []);

	const onGridReady = (params) => {
		setGridApi(params.api);
	};

	const onSelectionChanged = () => {
		const selectedRows = gridApi.getSelectedRows();
		setSelectedPartners(selectedRows);
	};

	const getPartners = () => {
		requests.getPartners().then((results) => {
			results.forEach((partner) => {
				partner.date = moment(partner.startDate).format('LL');
			});
			setPartners(results);
		});
	};

	const deleteSelected = () => {
		selectedPartners.forEach((partner) => {
			requests.deletePartner(partner.id);
		});
		requests.getPartners().then((results) => {
			setPartners(results);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Partners</h1>
			</div>
			<div className="actions-container">
				<div onClick={deleteSelected} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Remove Partner</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 600, width: '100%' }}
			>
				<AgGridReact
					onSelectionChanged={onSelectionChanged}
					onGridReady={onGridReady}
					rowData={partners}
					modules={[RowGroupingModule]}
					rowSelection="multiple"
					autoGroupColumnDef={{ minWidth: 250 }}
					defaultColDef={{ resizable: true }}
				>
					<AgGridColumn
						field="company"
						headerName="Company"
						rowGroup={true}
						hide={true}
					/>

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
						field="whyPartner"
						headerName="Reason"
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default PartnerTable;
