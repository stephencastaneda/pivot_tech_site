import React from 'react';

function PivotDataTeamCard(props) {
	return (
		<>
		<div className="pivot-card">
      <div className="card" style={{ width:235, height:235 }}>
			<img className="card-img-top" src={ props.dataTeamMember.image } stylealt="Data Team Member Photo" />
      </div>
      <div className="text-center team-name">{ props.dataTeamMember.firstName} {props.dataTeamMember.lastName}</div>
			<div className="text-center team-position">{ props.dataTeamMember.position}</div>
		</div>
	</>
	);
}


export default PivotDataTeamCard;