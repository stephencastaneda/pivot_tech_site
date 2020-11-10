import React from 'react';
import './WebDevelopmentPage.scss';
import MyFooter from '../../components/MyFooter/MyFooter';

function WebDevelopmentPage() {
	return (
		<>
			<div className="web-page-container">
				<div class="card web-development-card-container mt-5">
					<div class="card-body web-development-card">
						<h1 className="web-development-title text-center text-white">
							Web Development
						</h1>
					</div>
				</div>

				<div class="card web-development-text-card mt-5">
					<div class="card-body programs-text-card">
						<h3>Details</h3>
						<hr></hr>
						<p>
							Employment of web developers is projected to grow 13 percent from
							2018 to 2028, much faster than the average for all occupations. In
							addition, an increase in the use of mobile devices to search the
							web will lead to increased demand for web developers.
						</p>
						<p>Tuition: $6,500</p>
						<p>Deposit: $1,000</p>
						<p>Payment plan will vary on individual basis</p>
						<p>Scholarships are offered if financial assitance is needed</p>
					</div>
				</div>

				<div class="course-breakdown-header">
					<h2 className="text-center">20 Week Course Breakdown</h2>
				</div>

				<div className="courses-flex d-flex justify-content-around flex-wrap mt-5">
					<div class="card web-course-card mb-5">
						<h5 class="card-header web-dev-card-header">
							Module 1: Introduction to Web Dev
						</h5>
						<div class="card-body web-dev-course-card-text">
							<h5 class="card-title">Weeks 1-4</h5>
							<ul>
								<li>HTML</li>
								<li>Semantic Mark Up</li>
								<li>Web Layout</li>
								<li>Box Model</li>
							</ul>
						</div>
					</div>

					<div class="card web-course-card mb-5">
						<h5 class="card-header web-dev-card-header">
							Module 2: Design Fundamentals
						</h5>
						<div class="card-body web-dev-course-card-text">
							<h5 class="card-title">Weeks 5-8</h5>
							<ul>
								<li>Web Design Fundamentals</li>
								<li>CSS Concepts, CSS Grid</li>
								<li>Animation</li>
								<li>Media Queries</li>
								<li>CSS Framework</li>
							</ul>
						</div>
					</div>

					<div class="card web-course-card mb-5">
						<h5 class="card-header web-dev-card-header">
							Module 3: Javascript
						</h5>
						<div class="card-body web-dev-course-card-text">
							<h5 class="card-title">Weeks 9-14</h5>
							<ul>
								<li>JavaScript Introdution</li>
								<li>Deep Dive</li>
								<li>Hacking the DOM</li>
								<li>JQuery</li>
							</ul>
						</div>
					</div>

					<div class="card web-course-card mb-5">
						<h5 class="card-header web-dev-card-header">
							Module 4: Advanced Web Dev Concepts
						</h5>
						<div class="card-body web-dev-course-card-text">
							<h5 class="card-title">Weeks 15-18</h5>
							<ul>
								<li>Google Firebase</li>
								<li>In-Demand JavaScript Requirements</li>
								<li>React</li>
								<li>SEO</li>
								<li>API</li>
							</ul>
						</div>
					</div>

					<div class="card web-course-card mb-5">
						<h5 class="card-header web-dev-card-header">
							Module 5: Capstone Project
						</h5>
						<div class="card-body web-dev-course-card-text">
							<h5 class="card-title">Weeks 19-20</h5>
							<ul>
								<li>
									Students will create their own project using all of the skills
									learned in the previous weeks
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="apply-btn-flex">
					<button
						type="button"
						className="btn apply-btn rounded-pill text-white btn-lg font-weight-bold"
					>
						Apply Now
					</button>
				</div>
			</div>
			<MyFooter />
		</>
	);
}

export default WebDevelopmentPage;
