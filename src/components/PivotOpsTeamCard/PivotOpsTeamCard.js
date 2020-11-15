import React from 'react';

function PivotOpsTeamCard(props) {
	return (
		<>
			<div className="pivot-card col-auto">
				<figure>
					<div className="flip-card-inner">
						<div className="card-back">
							<img
								className="card-img-top"
								style={{ width: 235, height: 235 }}
								src={props.opsTeamMember.gif}
								stylealt="Gif"
								alt=""
							/>
						</div>
						<div
							className="card card-front"
							style={{ width: 235, height: 235 }}
						>
							<img
								className="card-img-top team-photo"
								src={props.opsTeamMember.image}
								stylealt="Ops Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<figCaption className="text-center team-name">
						{props.opsTeamMember.firstName} {props.opsTeamMember.lastName}
					</figCaption>
					<figCaption className="text-center team-position">
						{props.opsTeamMember.position}
					</figCaption>
				</figure>
			</div>
		</>
	);
}

export default PivotOpsTeamCard;
