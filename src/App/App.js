import React from 'react';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
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

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MyNavbar />
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
						path="/scholarship-application"
						component={ScholarshipApplicationPage}
					/>
					<Route path="/pivot-application" component={PivotApplicationPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
