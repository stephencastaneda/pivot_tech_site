import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import requests from '../../helpers/data/pivotRequests';
import AddCourseModal from '../AddCourseModal/AddCourseModal';
import moment from 'moment';

function CoursesTable() {
	const [courses, setCourses] = useState([]);
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
	};

	useEffect(() => {
		getCourses();
	}, []);

	const getCourses = () => {
		requests.getCourses().then((results) => {
			results.forEach((course) => {
				course.startDate = moment(course.startDate).format('LL');
				course.endDate = moment(course.endDate).format('LL');
			});
			console.log(results);
			setCourses(results);
		});
	};

	return (
		<div>
			<div className="card-body admin-card">
				<h1 className="admin-title text-center text-white">Courses</h1>
			</div>
			<div className="actions-container">
				<div onClick={toggle} className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/add.png')}
						alt="transition to student"
					/>
					<span>Add Course</span>
				</div>
				<div /*onClick={deleteSelected}*/ className="icon-wrapper">
					<img
						className="icon"
						src={require('../../icons/delete.png')}
						alt="delete"
					/>
					<span>Delete Course</span>
				</div>
			</div>
			<div
				className="table ag-theme-alpine"
				style={{ height: 700, width: '100%' }}
			>
				<AgGridReact
					rowData={courses}
					modules={[RowGroupingModule]}
					rowSelection="multiple"
					autoGroupColumnDef={{ minWidth: 200 }}
				>
					<AgGridColumn field="courseName" rowGroup={true} hide={true} />
					<AgGridColumn field="startDate" rowGroup={true} hide={true} />
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
						headerName="Last Name"
						field="lastName"
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
				</AgGridReact>
			</div>
			<AddCourseModal modal={modal} toggle={toggle} />
		</div>
	);
}

export default CoursesTable;
