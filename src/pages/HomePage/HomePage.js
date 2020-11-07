import React, { useEffect, useState } from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import { Button, Card, CardTitle, CardText } from 'reactstrap';
import LazyHero from 'react-lazy-hero'
import './HomePage.scss';
import EventCard from '../../components/EventCard/EventCard';
import MyFooter from '../../components/MyFooter/MyFooter';
import CourseCard from '../../components/CourseCard/CourseCard';
import requests from '../../helpers/data/pivotRequests';

function HomePage(props) {
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
	const cyberSecurityCourses = courses
		.filter((course) => course.courseName === 'Cyber Security')
		.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		});

	useEffect(() => {
		requests.getEvents().then((results) => {
			setEvents(results);
		});
		requests.getCourses().then((results) => {
			setCourses(results);
		});
	}, []);

	return (
		<div className="homepage-container">
		<HomeCarousel />
		<div className="mb-5" id="info-section-container">
			<div className="card hero-card-border">
			<div class="icon-and-info">
				<img
					className="medium-icon"
					src={require('../../icons/development.png')}
					alt="bootcamp"
				/>
				<div className="info-section">
					<h4 className="info-section-header">CODING BOOT CAMPS</h4>
					<p>
						20 week program designed with the working professional in mind.
					</p>
					<p style={{ margin: 0 }}>Students will receive:</p>
					<div className="bullet-list">
						<span>- Pivot Certificate of Completion</span>
						<span>- Access to Google Classroom</span>
						<span>- Live virtual classrooms</span>
						<span>- Weekend virtual labs</span>
						<span>- Mentoring Program</span>
						<span>- Direct Placement Assistance</span>
						<span>- Interaction with other students in class</span>
					</div>
					<div className="info-section-button">
						<Button>Learn More</Button>
					</div>
				</div>
			</div>
			</div>
			<div className="card hero-card-border">
			<div className="icon-and-info">
				<img
					className="medium-icon"
					src={require('../../icons/development.png')}
					alt="bootcamp"
				/>
				<div className="info-section">
					<h4 className="info-section-header">INDIVIDUAL COURSES</h4>
					<p>
						Classes can be taken individually or packaged at discounted rate
					</p>
					<p style={{ margin: 0 }}>Students will receive:</p>
					<div className="bullet-list">
						<span>- Access to Google Classroom</span>
						<span>- Live virtual classrooms</span>
						<span>- Weekend virtual labs</span>
						<span>- Access to instructors who can answer question</span>
						<span>- Interaction with other students in class</span>
					</div>
					<div class="info-section-button">
						<Button>Learn More</Button>
					</div>
				
				</div>
			</div>
			</div>
			<div className="card hero-card-border">
			<div className="icon-and-info">
				<img
					className="medium-icon"
					src={require('../../icons/development.png')}
					alt="bootcamp"
				/>
				<div className="info-section">
					<h4 className="info-section-header">WEEKEND CERTIFICATION</h4>
					<p style={{ textAlign: 'center' }}>**Coming Soon**</p>
					<p style={{ margin: 0 }}>Students will receive:</p>
					<div className="bullet-list" id="weekend-cert">
						<span>
							- Industry leading training for the most in-demand
							certifications
						</span>
						<span>- Discounts for certification tests</span>
						<span>- Access to Pivot Mentors</span>
					</div>
					<div className="info-section-button">
						<Button>Coming Soon!</Button>
					</div>
				</div>
			</div>
			</div>
		</div>
		<div className="video-container">
			<div className="video-block">
			<iframe src="https://player.vimeo.com/video/476555021?byline=0&portrait=0&title=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
			</div>
		</div>
		<div className="mission-section">
			<h2>Pivot's Mission</h2>
			<span style={{ fontWeight: 'bold' }}>
				To empower minorities to take advantage of a changing work landscape
				by providing cutting edge, comprehensive technology training.
			</span>
			<div class="grid-container">
				<div class="mission-card-container">
					<div className="first-card card">
						<p className="bold-text">
							Many of the highest paying jobs in this country have a major
							lack of diversity amongst their ranks. This is especially true
							for the field of technology.
						</p>
						<p className="card-text">
							Technology has always had great influence on the advances in our
							society and that rings true even more today, considering tech
							has become so finely ingrained in our day-to-day activities.
						</p>
					</div>
					<div className="first-card-dots"></div>
					<div className="second-card card">
						<p className="bold-text">
							People creating new tech should be representative of the
							population that’ll be using the new tech! Unfortunately, that’s
							not the case right now.
						</p>
						<p className="card-text">
							The percentage of Black and Latino software developers is not at
							all proportionate to their overall population and that needs to
							change. This is where we step in!
						</p>
					</div>
					<div className="second-card-dots-inner"></div>
					<div className="second-card-dots-outer"></div>
					<div className="third-card card">
						<p className="bold-text">
							Pivot Tech is here to provide a foundational and working
							knowledge of Software Development and Data Analytics to the
							underrepresented minorities in the tech field.
						</p>
						<p className="card-text">
							Our goal is to help as many people from this group as possible
							land their first tech jobs, which will help contribute to
							closing the wealth gap between races in America and
							simultaneously making companies more diverse and proportionate
							to the population they serve.
						</p>
					</div>
					<div className="third-card-dots"></div>
				</div>
			</div>
		</div>
		<div className="programs-section">
			<h2 style={{ textAlign: 'center' }}>UPCOMING PROGRAMS</h2>
			<div class="program-header">
				<h4>Web Development</h4>
				<hr style={{ borderColor: 'white' }}></hr>
			</div>

			<div className="program-card-container">{webDevCourses}</div>

			<div class="program-header">
				<h4>Data Analytics</h4>
				<hr style={{ borderColor: 'white' }}></hr>
			</div>
			<div className="program-card-container">{dataAnalyticsCourses}</div>
		</div>
		<div className="events-section">
			<h2 style={{ textAlign: 'center' }}>UPCOMING EVENTS</h2>
			<div class="events-container">
				<div className="event-cards-container">
					{events.map((event) => {
						return <EventCard event={event} />;
					})}
				</div>
			</div>
		</div>
		<div className="instagram-section">
			<h2 style={{ textAlign: 'center' }}>PIVOT TECH SCHOOL'S INSTAGRAM</h2>
		</div>
		<MyFooter />
	</div>
);
}


export default HomePage;
