import React, { useEffect, useState } from 'react';
import AlumCard from '../../components/AlumCard/AlumCard'
import alumniData from '../../helpers/data/alumni'
import './PivotGraduatesPage.scss'

function PivotGraduatesPage() {

const [alumni, setAlumni] = useState([])

const getAlumni = () => {
	alumniData.getAllAlumni()
	.then((alumni) => {
		setAlumni(alumni)
	})
}

useEffect(getAlumni, [])


// useEffect(() => {
// 	getAlumni()}, []);

	return (
		<>
		<div class="blockquote-wrapper">
		<div class="blockquote">
			<h1>
				A lot of jobs have already been replaced by technology with many many more to come and I couldn't afford to be left behind.
			 </h1>
			<h4>&mdash;Shontrell<br></br>Pivot Tech Alumni</h4>
		</div>
		<h2 className="text-white text-center mt-5">Pivot Tech Alumni</h2>
		<div className="d-flex flex-wrap home-flex justify-content-around">
				  {alumni.map(alum=> <AlumCard key={alum.id} alumId={alum.id} alum={alum} />)}
		</div>
	</div>
	</>
		
	);
}

export default PivotGraduatesPage;
