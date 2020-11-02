import React, { useEffect, useState } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { IntercomProvider, useIntercom } from 'react-use-intercom';
import HomePage from '../pages/HomePage/HomePage';
import ProgramsPage from '../pages/ProgramsPage/ProgramsPage';
import PivotTeamPage from '../pages/PivotTeamPage/PivotTeamPage';
import AssessmentPage from '../pages/AssessmentPage/AssessmentPage';
import MentorProgramPage from '../pages/MentorProgramPage/MentorProgramPage';
import PivotPartnersPage from '../pages/PivotPartnersPage/PivotPartnersPage';
import PivotGraduatesPage from '../pages/PivotGraduatesPage/PivotGraduatesPage';
import ScholarshipApplicationPage from '../pages/ScholarshipApplicationPage/ScholarshipApplicationPage';
import PivotApplicationPage from '../pages/PivotApplicationPage/PivotApplicationPage';
import WebDevelopmentPage from '../pages/WebDevelopmentPage/WebDevelopmentPage';
import DataAnalyticsPage from '../pages/DataAnalyticsPage/DataAnalyticsPage';
import CyberSecurityPage from '../pages/CyberSecurityPage/CyberSecurityPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import pivotRequests from '../helpers/data/pivotRequests';
import connection from '../helpers/data/connection';
import apiKeys from '../helpers/apiKeys.json';

const INTERCOM_APP_ID = apiKeys.intercomApiKey.intercomApiId;

function App() {
	const [userObject, setUserObject] = useState({});
	const [authed, setAuthed] = useState(false);
	const [pending, setPending] = useState(false);

	useEffect(() => {
		connection();
		setPending(true);
		const removeListener = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setUserObject(user);
				setAuthed(true);
				setPending(false);
				pivotRequests.getAllUsers().then((allUsers) => {
					const filteredUsers = allUsers.filter(
						(userObj) => userObj.uid === user.uid
					).length;
					if (filteredUsers === 0) {
						const userInfo = {
							fullName: user.displayName,
							email: user.email,
							uid: user.uid,
						};
						pivotRequests.createUser(userInfo);
					}
				});
				const currentUid = user.uid;
				pivotRequests.getUserByUid(currentUid).then((user) => {
					setUserObject(user);
					setAuthed(true);
				});
			} else {
				setAuthed(false);
				setPending(false);
			}
		});
		return () => {
			removeListener();
		};
	}, []);

	const logoutClickEvent = () => {
		pivotRequests.logoutUser();
		setAuthed(false);
		window.location.assign('./home');
	};

	return (
		<div className="App">
			<BrowserRouter>
				<MyNavbar
					userObject={userObject}
					isAuthed={authed}
					logoutClickEvent={logoutClickEvent}
				/>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/home" exact component={HomePage} />
					<Route path="/programs" component={ProgramsPage} />
					<Route path="/pivot-team" component={PivotTeamPage} />
					<Route path="/assessment" component={AssessmentPage} />
					<Route path="/mentor-program" component={MentorProgramPage} />
					<Route path="/pivot-partners" component={PivotPartnersPage} />
					<Route path="/pivot-graduates" component={PivotGraduatesPage} />
					<Route path="/web-development" component={WebDevelopmentPage} />
					<Route path="/data-analytics" component={DataAnalyticsPage} />
					<Route path="/cyber-security" component={CyberSecurityPage} />
					<Route
						path="/admin"
						component={() => (
							<AdminPage
								isPending={pending}
								isAuthed={authed}
								userObject={userObject}
							/>
						)}
					/>
					<Route
						path="/scholarship-application"
						component={ScholarshipApplicationPage}
					/>
					<Route path="/pivot-application" component={PivotApplicationPage} />
				</Switch>
			</BrowserRouter>
			<IntercomProvider
				appId={INTERCOM_APP_ID}
				autoBoot={true}
			></IntercomProvider>
		</div>
	);
}

export default App;
