import React from 'react';
import StayInformedForm from '../StayInformedForm/StayInformedForm';
import './MyFooter.scss';

function MyFooter() {
	return (
		<div className="footer-container">
			<div className="form-container">
				<StayInformedForm />
			</div>
			<div className="program-and-involved">
				<div className="programs">
					<p className="footer-header">Programs</p>
					<a href="web-development">
						<p>Web Development</p>
					</a>
					<a href="data-analytics">
						<p>Data Analytics</p>
					</a>
					<a href="cyber-security">
						<p>Cyber Security</p>
					</a>
				</div>
				<div className="get-involved">
					<p className="footer-header">Get Involved</p>
					<a href="pivot-partners">
						<p>Pivot Partners</p>
					</a>
					<a href="mentor-program">
						<p>Mentor Program</p>
					</a>
				</div>
			</div>
			<div className="community">
				<p className="footer-header">Community</p>
				<a href="pivot-team">
					<p>Our Team</p>
				</a>
				<a href="pivot-graduates">
					<p>Alumni</p>
				</a>
			</div>
			<div className="social-media">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/pivottechschool/"
				>
					<img
						className="social-icon"
						src={require('../../icons/facebook.png')}
						alt="facebook"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/pivottechschool/"
				>
					<img
						className="social-icon"
						src={require('../../icons/instagram.png')}
						alt="instagram"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.twitter.com/pivottechschool/"
				>
					<img
						className="social-icon"
						src={require('../../icons/twitter.png')}
						alt="twitter"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/company/pivot-technology-school/"
				>
					<img
						className="social-icon"
						src={require('../../icons/linkedin.png')}
						alt="linkedin"
					/>
				</a>
			</div>
		</div>
	);
}

export default MyFooter;
