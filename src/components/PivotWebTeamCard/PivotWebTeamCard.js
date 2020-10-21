import React from 'react';

function PivotWebTeamCard(props) {
	return (
		<>
		<div className="pivot-card">
      <div className="card" style={{ width:235, height:235 }}>
			<img className="card-img-top" src={ props.webTeamMember.image } stylealt="Web Team Member Photo" />
      </div>
      <div className="text-center team-name">{ props.webTeamMember.firstName} {props.webTeamMember.lastName}</div>
			<div className="text-center team-position">{ props.webTeamMember.position}</div>
		</div>
	</>
	);
}


export default PivotWebTeamCard;