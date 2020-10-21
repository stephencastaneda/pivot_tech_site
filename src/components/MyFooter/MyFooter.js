import React from 'react';
import StayInformedForm from '../StayInformedForm/StayInformedForm';
import './MyFooter.scss';

function MyFooter() {
	return (
		<div className="footer-container">
			<div class="form-container">
				<StayInformedForm />
			</div>
			<div class="program-and-involved">
				<div class="programs">
					<p class="footer-header">Programs</p>
					<a href="">
						<p>Web Development</p>
					</a>
					<a href="">
						<p>Data Analytics</p>
					</a>
					<a href="">
						<p>Cyber Security</p>
					</a>
				</div>
				<div class="get-involved">
					<p class="footer-header">Get Involved</p>
					<a href="">
						<p>Web Development</p>
					</a>
					<a href="">
						<p>Data Analytics</p>
					</a>
					<a href="">
						<p>Cyber Security</p>
					</a>
				</div>
			</div>
			<div class="community">
				<p class="footer-header">Community</p>
				<a href="">
					<p>Our Team</p>
				</a>
				<a href="">
					<p>Alumni</p>
				</a>
			</div>
			<div class="social-media">
				<img
					classname="social-icon"
					src={require('../../icons/facebook.png')}
					alt="facebook"
				/>
				<img
					classname="social-icon"
					src={require('../../icons/instagram.png')}
					alt="facebook"
				/>
				<img
					classname="social-icon"
					src={require('../../icons/twitter.png')}
					alt="facebook"
				/>
				<img
					classname="social-icon"
					src={require('../../icons/linkedin.png')}
					alt="facebook"
				/>
			</div>
		</div>
	);
}

export default MyFooter;
