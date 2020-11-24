import React from 'react';

function PivotOpsTeamCard(props) {
	return (
		<>
			<div className="pivot-card">
				<figure>
					<div className="flip-card-inner">
						<div className="card-back">
							<img
								className="card-img-top"
								src={props.opsTeamMember.gif}
								stylealt="Gif"
								alt=""
							/>
						</div>
						<div className="card card-front">
							<img
								className="card-img-top team-photo"
								src={props.opsTeamMember.image}
								stylealt="Ops Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-center team-name">
						{props.opsTeamMember.firstName} {props.opsTeamMember.lastName}
					</h3>
					<h4 className="text-center team-position">
						{props.opsTeamMember.position}
					</h4>
				</figure>
			</div>
		</>
	);
}

export default PivotOpsTeamCard;
