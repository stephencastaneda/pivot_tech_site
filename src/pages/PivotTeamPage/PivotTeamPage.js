import React, { useEffect, useState } from 'react';
import PivotExecTeamCard from '../../components/PivotExecTeamCard/PivotExecTeamCard'
import PivotOperationsTeamCard from '../../components/PivotOpsTeamCard/PivotOpsTeamCard'
import PivotDataTeamCard from '../../components/PivotDataTeamCard/PivotDataTeamCard'
import PivotWebTeamCard from '../../components/PivotWebTeamCard/PivotWebTeamCard'
import pivotTeamData from '../../helpers/data/pivotTeam';
import './PivotTeamPage.scss'


function PivotTeamPage() {

const [pivotTeam, setPivotTeam] = useState([])
const [executiveTeamMember, setExecutiveTeamMember] = useState([])
const [operationsTeamMember, setOperationsTeamMember] = useState([])
const [dataTeamMembers, setDataTeamMember] = useState([])
const [webTeamMembers, setWebTeamMember] = useState([])

const getPivotTeam = () => {
	pivotTeamData.getAllPivotTeam()
	.then((pivotTeam) => {
		let getExecTeamMember = pivotTeam.filter(pivotTeam => pivotTeam.department === "Executive" )
		setExecutiveTeamMember(getExecTeamMember)
		let getOperationsTeamMember = pivotTeam.filter(pivotTeam => pivotTeam.department === "Operations" )
		setOperationsTeamMember(getOperationsTeamMember)
		let getDataTeamMember = pivotTeam.filter(pivotTeam => pivotTeam.department === "Data" )
		setDataTeamMember(getDataTeamMember)
		let webTeamMember = pivotTeam.filter(pivotTeam => pivotTeam.department === "Web" )
		setWebTeamMember(webTeamMember)
	} 
	)} 

useEffect(() => {
	getPivotTeam()
}, []);

useEffect(getPivotTeam, [])


	return (
		<>
		<div className="card text-center mt-5">
			<h2 className="pivot-team-title pt-4">Our team is rapidly growing with some of the most talented
 				&amp; passionate professionals in the field</h2>
				 <p className=''>By the end of 2020, a projected 100 students will graduate from Pivot Tech</p>
		</div>
		<div className="pivot-team-cards">
		<div>
			<h2 className="text-center pt-5 text-white">Meet The Team</h2>
		</div>
		<h2 className="text-white executive-title mb-5"><span>Executive Team</span></h2>
		<div className="d-flex flex-wrap home-flex justify-content-around">
          {executiveTeamMember.map(execTeamMember => <PivotExecTeamCard key={execTeamMember.id} execTeamMemberId={execTeamMember.id} execTeamMember={execTeamMember} />)}
		</div>
		<h2 className="text-white operation-title mt-3 mb-5">Operations</h2>
		<div className="d-flex flex-wrap home-flex justify-content-around">
					{operationsTeamMember.map(opsTeamMember => <PivotOperationsTeamCard key={opsTeamMember.id} opsTeamMemberId={opsTeamMember.id} opsTeamMember={opsTeamMember} />)}
		</div>
		<h2 className="text-white data-title mt-3 mb-5">Data Science and Analytics</h2>
		<div className="d-flex flex-wrap home-flex justify-content-around">
				  {dataTeamMembers.map(dataTeamMember => <PivotDataTeamCard key={dataTeamMember.id} dataTeamMemberId={dataTeamMember.id} dataTeamMember={dataTeamMember} />)}
		</div>
		<h2 className="text-white web-title mt-3 mb-5">Web Development</h2>
		<div className="d-flex flex-wrap home-flex justify-content-around">
					{webTeamMembers.map(webTeamMember => <PivotWebTeamCard key={webTeamMember.id} webTeamMemberId={webTeamMember.id} webTeamMember={webTeamMember} />)}
        </div>
				</div>
		</>
	);
}

export default PivotTeamPage;