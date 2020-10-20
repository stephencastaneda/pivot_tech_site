import React, { useEffect, useState } from 'react';
import PivotTeamCard from '../../components/PivotTeamCard/PivotTeamCard'
import pivotTeamData from '../../helpers/data/pivotTeam';

function PivotTeamPage() {

const [pivotTeam, setPivotTeam] = useState([])

const getPivotTeam = () => {
	pivotTeamData.getAllPivotTeam()
	.then((pivotTeam) => setPivotTeam(pivotTeam))
} 

// useEffect(() => {
// 	getPivotTeam()
// }, []);

useEffect(getPivotTeam, [])


	return (
		<>
		<div className="card text-center mt-5">
			<h2 className="pivot-team-title pt-4">Our team is rapidly growing with some of the most talented
 				&amp; passionate professionals in the field</h2>
				 <p className=''>By the end of 2020, a projected 100 students will graduate from Pivot Tech</p>
		</div>
		<div>
			<h2 className="text-center pt-5 text-white">Meet The Team</h2>
		</div>
		<div className="d-flex flex-wrap home-flex" style={{ "padding" : "20px", "align-items" : "center" }}>
            {pivotTeam.map(employee => <PivotTeamCard key={employee.id} employeeId={employee.id} getPivotTeam={getPivotTeam} pivotTeam={employee} />)}
        </div>

		</>
	);
}

export default PivotTeamPage;
