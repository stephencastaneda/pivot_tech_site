import React, { useEffect, useState } from 'react';
import './MakeThePivotPage.scss'

function MakeThePivotPage() {


	return (
		<>
		<h1 className="text-center pt-5">Make the Pivot Together!</h1>
		<h3 className="text-center pt-3 headline-text">Pivot Technology School highlights African American women looking for an opportunity to Make the Pivot and change their families future forever. We are asking <span className="underline-text">YOU</span> to help make it a reality. Donate today!</h3>
		<div className="d-flex flex-wrap column">
		<div className="author-quote-wrap">
		<input className="toggle-quote" type="radio" id="AQ-1" name="quote" checked />
		<div className="author-quote">
			<div className="pull-left author-photo photo-a animated bounceInLeft">
			</div>
			<div className="pull-right quote-content">
				<p className="quote-text animated rotateInDownRight">This opportunity to PIVOT means I can do more in the DEI space I work in and have the certification to be recognized as a true professional. It will open doors that have been closed to me and hopefully allow me to provide a better life for my family!</p>
				<div className="quote-author animated lightSpeedIn">Aimee Sadler</div>
			</div>
		</div>
	</div>

<div className="author-quote-wrap">
<div className="author-quote">
	<div className="pull-left author-photo photo-b animated bounceInLeft">
	</div>
	<div className="pull-right quote-content">
		<p className="quote-text animated rotateInDownRight">Don't YouThink ThatIf I WereWrong,I'd Know It?</p>
		<div className="quote-author animated lightSpeedIn">Aimee Sadler</div>
	</div>
</div>
</div>

<div className="author-quote-wrap">
<div className="author-quote">
	<div className="pull-left author-photo photo-c animated bounceInLeft">
	</div>
	<div className="pull-right quote-content">
		<p className="quote-text animated rotateInDownRight">Don't YouThink ThatIf I WereWrong,I'd Know It?</p>
		<div className="quote-author animated lightSpeedIn">Sheldon Cooper</div>
	</div>
</div>
</div>
</div>
	</>
	);
}

export default MakeThePivotPage;
