import React, { useEffect, useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import { Button } from 'reactstrap';
import MyFooter from '../../components/MyFooter/MyFooter';


import './MakeThePivotPage.scss'

function MakeThePivotPage() {


	return (
		<>
		<div className="hero-pivot">
				<div className="hero-text">
					<h1>Make the Pivot Together!</h1>
					<p>Pivot Technology School highlights African American women looking for an opportunity to Make the Pivot and change their families future forever. We are asking <span className="underline-text">YOU</span> to help make it a reality. Donate today!</p>
				</div>
			</div>
		
		<div className="justify-content-center d-flex flex-wrap">
		<div class='fundly-widget'><iframe className="fundly-frame" src='https://d2wwhrh9otv6z9.cloudfront.net/campaign_card.html?activity=help-aimee-sadler-make-the-pivot&hb=t'></iframe>
			<a className="donate-btn" href='https://fundly.com/help-aimee-sadler-make-the-pivot#donate' target="_blank"><img src='//fundly.com/assets/widgets/donate_now.png' title='Help Amiee Sadler Make the Pivot'/></a>
		</div>
		<div class='fundly-widget'><iframe className="fundly-frame" src='https://d2wwhrh9otv6z9.cloudfront.net/campaign_card.html?activity=help-cierra-fleming-make-the-pivot&hb=t'></iframe>
			<a className="donate-btn" href='https://fundly.com/help-cierra-fleming-make-the-pivot#donate' target="_blank"><img src='//fundly.com/assets/widgets/donate_now.png' title='Help Cierra Fleming Make the Pivot'/></a>
		</div>
	</div>
	<MyFooter/>
	</>
	);
}

export default MakeThePivotPage;
