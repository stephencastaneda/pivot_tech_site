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
								style={{ width: 235, height: 235 }}
								src={props.execTeamMember.gif}
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
								src={props.execTeamMember.image}
								stylealt="Exec Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<figCaption className="text-center team-name">
						{props.execTeamMember.firstName} {props.execTeamMember.lastName}
					</figCaption>
					<figCaption className="text-center team-position">
						{props.execTeamMember.position}
					</figCaption>
				</figure>
			</div>
		</>
	);
}

export default PivotExecTeamCard;
