import React from 'react';
import pivotTeam from '../../helpers/data/pivotTeam';

function PivotPartnersPage(props) {
	return (
		<div className="pivot-card col-3">
      <div className="card">
			<p>{ props.pivotTeam.id }</p>
      </div>
		</div>
	);
}

export default PivotPartnersPage;