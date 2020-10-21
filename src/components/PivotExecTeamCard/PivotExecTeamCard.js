import React from 'react';

function PivotExecTeamCard(props) {
	return (
		<>
		<div className="pivot-card col-xs-6 ">
			<div className="flip-card-inner">
      <div className="card card-front" style={{ width:235, height:235 }}>
				<img className="card-img-top" src={ props.execTeamMember.image } stylealt="Exec Team Member Photo" />
				</div>
				<div className="card-back">
					<p>yurp</p>
				</div>
				<figCaption className="text-center team-name">{ props.execTeamMember.firstName} {props.execTeamMember.lastName}</figCaption>
				<figCaption className="text-center team-position">{ props.execTeamMember.position}</figCaption>
			</div>
		
		</div>
	</>
	);
}


export default PivotExecTeamCard;