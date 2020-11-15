import React from 'react';

function PivotWebTeamCard(props) {
	return (
		<>
			<div className="pivot-card">
				<figure>
					<div className="flip-card-inner">
						<div className="card-back">
							<img
								className="card-img-top"
								style={{ width: 235, height: 235 }}
								src={props.webTeamMember.gif}
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
								src={props.webTeamMember.image}
								stylealt="Web Team Member Photo"
								alt=""
							/>
						</div>
					</div>
					<figCaption className="text-center team-name">
						{props.webTeamMember.firstName} {props.webTeamMember.lastName}
					</figCaption>
					<figCaption className="text-center team-position">
						{props.webTeamMember.position}
					</figCaption>
				</figure>
			</div>
		</>
	);
}

export default PivotWebTeamCard;
