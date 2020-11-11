import React, { useEffect, useState } from 'react';
import AlumCard from '../../components/AlumCard/AlumCard';
import MyFooter from '../../components/MyFooter/MyFooter';
import alumniData from '../../helpers/data/alumni';
import './PivotGraduatesPage.scss';

function PivotGraduatesPage() {
	const [alumni, setAlumni] = useState([]);

	const getAlumni = () => {
		alumniData.getAllAlumni().then((alumni) => {
			setAlumni(alumni);
		});
	};

	useEffect(getAlumni, []);

	// useEffect(() => {
	// 	getAlumni()}, []);

	return (
		<>
			<div className="blockquote-wrapper">
				<div className="blockquote">
					<h1>
						A lot of jobs have already been replaced by technology with many
						many more to come and I couldn't afford to be left behind.
					</h1>
					<h4 className="quote-author">
						&mdash;<strong>Shontrell Majors</strong>
						<br></br>
						<em>Pivot Tech Alumni</em>
					</h4>
				</div>
				<h2 className="quote-school text-center mt-5">
					<strong>Pivot Tech Alumni</strong>
				</h2>
				<div className="alumni-grid">
					{alumni.map((alum) => (
						<AlumCard key={alum.id} alumId={alum.id} alum={alum} />
					))}
				</div>
				<div className="footer-div">
					<MyFooter />
				</div>
			</div>
		</>
	);
}

export default PivotGraduatesPage;
