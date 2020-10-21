import React from 'react';

function PivotOpsTeamCard(props) {
	return (
		<>
		<div className="pivot-card col-xs-6">
      <div className="card" style={{ width:235, height:235 }}>
			<img className="card-img-top" src={ props.opsTeamMember.image } stylealt="Operations Team Member Photo" />
      </div>
      <div className="text-center team-name">{ props.opsTeamMember.firstName} {props.opsTeamMember.lastName}</div>
			<div className="text-center team-position">{ props.opsTeamMember.position}</div>
		</div>
	</>
	);
}


export default PivotOpsTeamCard;