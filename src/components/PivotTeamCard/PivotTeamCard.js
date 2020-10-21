import React from 'react';

function PivotTeamCard(props) {
	return (
		<>
		<div className="pivot-card col-3">
      <div className="card">
      </div>
		</div>
					<h1>{ props.execTeamMember.firstName }</h1>
		</>
	);
}


export default PivotTeamCard;