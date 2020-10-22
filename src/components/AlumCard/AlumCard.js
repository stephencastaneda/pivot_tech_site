import React from 'react'
import './AlumCard.scss'

function AlumCard(props) {
	return (
		<>
			<div className="card alumni-card border-0" style={{ width: "18rem" }}>
  <img className="card-img-top" src={ props.alum.image } alt="Card image cap" />
		<div className="overlay">
      <div className="overlay-text">
      <p>{ props.alum.firstName } { props.alum.lastName }</p>
      <p>{ props.alum.program }</p>
      <p>{ props.alum.cohort }</p>
      </div>
		</div>
  </div>
	</>
	);
}


export default AlumCard;