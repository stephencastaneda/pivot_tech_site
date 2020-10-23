import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import './AlumCard.scss'

function AlumCard(props) {
	return (
		<>
			<div className="card alumni-card border-0" style={{ width: "18rem" }}>
  <img className="card-img-top" src={ props.alum.image } alt="Card image cap" />
		<div className="overlay">
      <div className="overlay-text">
      <h3 className="pl-2 pt-3">{ props.alum.firstName } { props.alum.lastName }</h3>
      <p className="pl-2">{ props.alum.program } - { props.alum.cohort }</p>
      <div className="d-flex justify-content-center" style={{ color: 'white' }}>
      <a href={ props.alum.linkedIn } className="btn text-center linked-in-link" target="_blank"><FaLinkedin className="linked-in-icon img-fluid"/></a>
      </div>
      </div>
		</div>
  </div>
	</>
	);
}


export default AlumCard;