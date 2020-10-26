import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPivotTeam = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/pivotTeam.json`)
			.then((response) => {
				const team = response.data;
				const employees = [];
				if (team !== null) {
					Object.keys(team).forEach((pivotTeamId) => {
						team[pivotTeamId].id = pivotTeamId;
						employees.push(team[pivotTeamId]);
					});
				}
				resolve(employees);
			})
			.catch((err) => reject(err));
	});

const postApplicant = (newApplicant) =>
	axios.post(`${baseUrl}/applicants.json`, newApplicant);

export default { getAllPivotTeam, postApplicant };
