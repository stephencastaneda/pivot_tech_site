import React from 'react';

function PivotDataTeamCard(props) {
	return (
		<>
			<div className="pivot-card">
				<figure>
					<div className="flip-card-inner">
						<div className="card-back">
							<img
								className="card-img-top"
								style={{ width: 235, height: 235 }}
								src={props.dataTeamMember.gif}
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
								src={props.dataTeamMember.image}
								stylealt="Data Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<h3 className="text-center team-name">
						{props.dataTeamMember.firstName} {props.dataTeamMember.lastName}
					</h3>
					<h4 className="text-center team-position">
						{props.dataTeamMember.position}
					</h4>
				</figure>
			</div>
		</>
	);
}

export default PivotDataTeamCard;
