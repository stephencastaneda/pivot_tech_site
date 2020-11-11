import React, { useEffect, useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import { Button } from 'reactstrap';

import './MakeThePivotPage.scss'

function MakeThePivotPage() {


	return (
		<>
		<h1 className="text-center pt-5">Make the Pivot Together!</h1>
		<h3 className="text-center pt-3 headline-text">Pivot Technology School highlights African American women looking for an opportunity to Make the Pivot and change their families future forever. We are asking <span className="underline-text">YOU</span> to help make it a reality. Donate today!</h3>
		
		<div className="d-flex flex-wrap">
		<div className="author-quote-wrap">
		<div className="author-quote">
			<div className="pull-left author-photo photo-a animated bounceInLeft">
			</div>
			<div className="pull-right quote-content">
				<p className="quote-text animated rotateInDownRight">This opportunity to PIVOT means I can do more in the DEI space I work in and have the certification to be recognized as a true professional. It will open doors that have been closed to me and hopefully allow me to provide a better life for my family!</p>
				<div className="quote-author animated lightSpeedIn">Aimee Sadler</div>		
			</div>
		</div>
	</div>
	</div>
	<a href="https://www.fundly.com/help-aimee-sadler-make-the-pivot#donate" target="_blank" role="button" className="btn donate-btn btn-danger mt-3">
					HELP AIMEE PIVOT!
				</a>	
		
<div className="d-flex flex-wrap">
<div className="author-quote-wrap">
<div className="author-quote">
	<div className="pull-left author-photo photo-b animated bounceInLeft">
	</div>
	<div className="pull-right quote-content">
		<p className="quote-text animated rotateInDownRight">I decided after covid hit the economy, that I should get certified in something and learn a new skill. I have started taking web development classes through Udemy, but if I am chosen for the scholarship, I would love to learn from minority eduacators about web development.</p>
	
		<div className="quote-author animated lightSpeedIn">Cierra Fleming</div>
	
	</div>
</div>
</div>
</div>
<a href="https://www.fundly.com/help-cierra-fleming-make-the-pivot#donate" target="_blank" role="button" className="btn donate-btn btn-danger mt-3">
					HELP CIERRA PIVOT!
				</a>	
	</>
	);
}

export default MakeThePivotPage;
