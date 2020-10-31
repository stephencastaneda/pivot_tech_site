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

// Applicant Requests
const getApplicants = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/applicants.json`)
			.then((response) => {
				const applicantObj = response.data;
				const applicants = [];
				if (applicantObj !== null) {
					Object.keys(applicantObj).forEach((applicantId) => {
						applicantObj[applicantId].uid = applicantId;
						applicants.push(applicantObj[applicantId]);
					});
				}
				resolve(applicants);
			})
			.catch((err) => reject(err));
	});

const postApplicant = (newApplicant) =>
	axios.post(`${baseUrl}/applicants.json`, newApplicant);

const deleteApplicant = (applicantId) =>
	axios.delete(`${baseUrl}/applicants/${applicantId}.json`);

// Student Requests
const getStudents = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/students.json`)
			.then((response) => {
				const studentObj = response.data;
				const students = [];
				if (studentObj !== null) {
					Object.keys(studentObj).forEach((studentId) => {
						studentObj[studentId].uid = studentId;
						students.push(studentObj[studentId]);
					});
				}
				resolve(students);
			})
			.catch((err) => reject(err));
	});

const postStudent = (newStudent) =>
	axios.post(`${baseUrl}/students.json`, newStudent);

const deleteStudent = (studentId) =>
	axios.delete(`${baseUrl}/students/${studentId}.json`);

// Course Requests
const getCourses = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/courses.json`)
			.then((response) => {
				const courseObj = response.data;
				const courses = [];
				if (courseObj !== null) {
					Object.keys(courseObj).forEach((courseId) => {
						courseObj[courseId].id = courseId;
						courses.push(courseObj[courseId]);
					});
				}
				resolve(courses);
			})
			.catch((err) => reject(err));
	});

const pinIdToCourse = (idToPin) => {
	getCourses()
		.then((results) => {
			const matchingCourse = results.filter(
				(course) => course.id === idToPin
			)[0];
			matchingCourse.id = idToPin;
			editCourse(idToPin, matchingCourse);
		})
		.catch((err) => console.error('could not pin id to course', err));
};

const postCourse = (newCourse) =>
	axios.post(`${baseUrl}/courses.json`, newCourse);

const editCourse = (courseId, course) =>
	axios.put(`${baseUrl}/courses/${courseId}.json`, course);

const deleteCourse = (courseId) =>
	axios.delete(`${baseUrl}/courses/${courseId}.json`);

// Student Requests
const getEvents = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/events.json`)
			.then((response) => {
				const eventObj = response.data;
				const events = [];
				if (eventObj !== null) {
					Object.keys(eventObj).forEach((EventId) => {
						eventObj[EventId].uid = EventId;
						events.push(eventObj[EventId]);
					});
				}
				resolve(events);
			})
			.catch((err) => reject(err));
	});

const postEvent = (newEvent) => axios.post(`${baseUrl}/events.json`, newEvent);

const deleteEvent = (EventId) =>
	axios.delete(`${baseUrl}/events/${EventId}.json`);

export default {
	getAllPivotTeam,
	postApplicant,
	getApplicants,
	getStudents,
	getCourses,
	getEvents,
	postStudent,
	postCourse,
	postEvent,
	deleteApplicant,
	deleteStudent,
	deleteCourse,
	deleteEvent,
	editCourse,
	pinIdToCourse,
};
