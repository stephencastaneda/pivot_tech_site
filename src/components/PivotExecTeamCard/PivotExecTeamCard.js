import React from 'react';

function PivotExecTeamCard(props) {
	return (
		<>
			<div className="pivot-card">
				<figure>
					<div className="flip-card-inner">
						<div className="card-back">
							<img
								className="card-img-top"
								src={props.execTeamMember.gif}
								stylealt="Gif"
								alt=""
							/>
						</div>
						<div className="card card-front">
							<img
								className="card-img-top team-photo"
								src={props.execTeamMember.image}
								stylealt="Exec Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-center team-name">
						{props.execTeamMember.firstName} {props.execTeamMember.lastName}
					</h3>
					<h4 className="text-center team-position">
						{props.execTeamMember.position}
					</h4>
				</figure>
			</div>
		</>
	);
}

export default PivotExecTeamCard;
