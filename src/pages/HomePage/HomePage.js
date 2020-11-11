import React, { useEffect, useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import { Button } from 'reactstrap';
import './HomePage.scss';
import EventCard from '../../components/EventCard/EventCard';
import MyFooter from '../../components/MyFooter/MyFooter';
import CourseCard from '../../components/CourseCard/CourseCard';
import requests from '../../helpers/data/pivotRequests';

function HomePage() {
	const [events, setEvents] = useState([]);
	const [courses, setCourses] = useState([]);

	const webDevCourses = courses
		.filter((course) => course.courseName === 'Web Development')
		.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		});
	const dataAnalyticsCourses = courses
		.filter((course) => course.courseName === 'Data Analytics')
		.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		});
	// const cyberSecurityCourses = courses
	// 	.filter((course) => course.courseName === 'Cyber Security')
	// 	.map((course) => {
	// 		return <CourseCard key={course.id} course={course} />;
	// 	});

	useEffect(() => {
		requests.getEvents().then((results) => {
			setEvents(results);
		});
		requests.getCourses().then((results) => {
			setCourses(results);
		});
	}, []);

	return (
		<>
			<div className="hero-image">
				<div className="hero-text">
					<h2>Pivot Tech School</h2>
					<h1>PIVOT to a tech career in 20 weeks!</h1>
					<Button
						tag={Link}
						href="pivot-application"
						className="btn hero-btn"
						style={{ backgroundColor: 'navy', color: 'white' }}
					>
						Apply Today
					</Button>
				</div>
			</div>
			<div className="homepage-container">
				<div className="mb-5" id="info-section-container">
					<div className="hero-card-border">
						<div className="top-border">
							<div className="icon-and-info">
								<img
									className="medium-icon"
									src={require('../../icons/development.png')}
									alt="bootcamp"
								/>
							</div>
							<div className="info-section">
								<h4 className="info-section-header text-center">
									CODING BOOT CAMPS
								</h4>
								<p className="text-center info-description">
									20 week program designed with the working professional in mind
									with live virtual classrooms, and mentoring program.
								</p>

								<div className="info-section-button">
									<Button tag={Link} href="programs" className="info-btn">
										Learn More
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="hero-card-border">
						<div className="icon-and-info">
							<img
								className="medium-icon"
								src={require('../../icons/online-learning.png')}
								alt="bootcamp"
							/>
						</div>
						<div className="info-section">
							<h4 className="info-section-header text-center">
								INDIVIDUAL COURSES
							</h4>
							<p className="text-center info-description">
								Self guided courses that can be taken individually or at a
								discounted group rate. Includes access to all instructional
								videos.
							</p>
							<div className="info-section-button">
								<Button tag={Link} href="programs" className="info-btn">
									Learn More
								</Button>
							</div>
						</div>
					</div>

					<div className="hero-card-border">
						<div className="icon-and-info">
							<img
								className="medium-icon"
								src={require('../../icons/certificate.png')}
								alt="bootcamp"
							/>
						</div>
						<div className="info-section">
							<h4 className="info-section-header text-center">
								WEEKEND CERTIFICATION
							</h4>
							<p className="text-center info-description">
								Industry leading traning for the most in-demand certifications.
								Weekend instruction that works with your schedule.
							</p>

							<div className="info-section-button">
								<Button className="info-btn">Coming Soon!</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="video-container">
					<div className="video-div">
						<iframe
							title="Why Pivot Tech?"
							src="https://player.vimeo.com/video/476555021?byline=0&portrait=0&title=0"
							width="680"
							height="400"
							frameBorder="0"
							className="responsive-iframe"
							allow="autoplay; fullscreen"
							allowFullScreen
						></iframe>
					</div>
				</div>

				<div className="mission-section">
					<h2>Pivot's Mission</h2>
					<span style={{ fontWeight: 'bold' }}>
						To empower minorities to take advantage of a changing work landscape
						by providing cutting edge, comprehensive technology training.
					</span>
					<div className="grid-container">
						<div className="mission-card-container">
							<div className="first-card card">
								<p className="bold-text">
									Many of the highest paying jobs in this country have a major
									lack of diversity amongst their ranks. This is especially true
									for the field of technology.
								</p>
								<p className="card-text">
									Technology has always had great influence on the advances in
									our society and that rings true even more today, considering
									tech has become so finely ingrained in our day-to-day
									activities.
								</p>
							</div>
							<div className="first-card-dots"></div>
							<div className="second-card card">
								<p className="bold-text">
									People creating new tech should be representative of the
									population that’ll be using the new tech! Unfortunately,
									that’s not the case today.
								</p>
								<p className="card-text">
									The percentage of Black and Latino software developers is not
									at all proportionate to their overall population and that
									needs to change. This is where we step in!
								</p>
							</div>
							<div className="second-card-dots-inner"></div>
							<div className="second-card-dots-outer"></div>
							<div className="third-card card">
								<p className="bold-text">
									Pivot Tech is here to provide a foundational and working
									knowledge of Software Development and Data Analytics to the
									under-represented minorities in the tech field.
								</p>
								<p className="card-text">
									Our goal is to help as many people from this group as possible
									land their first tech jobs, which will help contribute to
									closing the wealth gap between races in America and
									simultaneously make companies more diverse and proportionate
									to the population they serve.
								</p>
							</div>
							<div className="third-card-dots"></div>
						</div>
					</div>
				</div>

				<div className="programs-section">
					<h2 style={{ textAlign: 'center' }}>UPCOMING PROGRAMS</h2>
					<div className="program-header">
						<h4>Web Development</h4>
						<hr style={{ borderColor: '#063767' }}></hr>
					</div>

					<div className="program-card-container">{webDevCourses}</div>

					<div className="program-header">
						<h4>Data Analytics</h4>
						<hr style={{ borderColor: '#063767' }}></hr>
					</div>
					<div className="program-card-container">{dataAnalyticsCourses}</div>
				</div>

				{events.length ? (
					<div className="events-section">
						<h2 style={{ textAlign: 'center' }}>UPCOMING EVENTS</h2>
						<div className="events-container">
							<div className="event-cards-container">
								{events.map((event) => {
									return <EventCard event={event} />;
								})}
							</div>
						</div>
					</div>
				) : null}

				{/* <div className="instagram-section">
				<h2 style={{ textAlign: 'center' }}>PIVOT TECH SCHOOL'S INSTAGRAM</h2>
			</div> */}
			</div>
			<MyFooter />
		</>
	);
}

export default HomePage;
