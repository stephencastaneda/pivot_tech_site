import axios from 'axios';
import apiKeys from '../apiKeys.json';
import firebase from 'firebase/app';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// Firebase login
const loginUser = (e, email, password) => {
	e.preventDefault();
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			window.location.assign('./admin');
		})
		.catch((err) => {
			let errorCode = err.code;
			let errorMessage = err.message;
			if (errorCode === 'auth/wrong-password') {
				errorMessage = 'Username or password is invalid.';
			} else if (errorCode === 'auth/user-not-found') {
				errorMessage = 'Username or password is invalid.';
			}
			alert(errorMessage);
		});
};

// Returns array of user objects
const getAllUsers = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/users.json`)
			.then((result) => {
				const userObject = result.data;
				const userArray = [];
				if (userObject != null) {
					Object.keys(userObject).forEach((userId) => {
						userObject[userId].id = userId;
						userArray.push(userObject[userId]);
					});
				}
				resolve(userArray);
			})
			.catch((error) => {
				reject(error);
			});
	});

// Creates new user in firebase
const createUser = (user) => axios.post(`${baseUrl}/users.json`, user);

const getUserByUid = (uid) =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
			.then((result) => {
				const userObject = result.data;
				let userKeys = '';
				if (userObject != null) {
					Object.keys(userObject).forEach((userId) => {
						userObject[userId].id = userId;
						userKeys = userObject[userId];
					});
				}
				resolve(userKeys);
			})
			.catch((error) => {
				reject(error);
			});
	});

// Logs user out
const logoutUser = () => firebase.auth().signOut();

// Gets all Pivot staff and graduates
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

const editApplicant = (applicantId, applicant) =>
	axios.put(`${baseUrl}/applicants/${applicantId}.json`, applicant);

const deleteApplicant = (applicantId) =>
	axios.delete(`${baseUrl}/applicants/${applicantId}.json`);

const markAsEnrolled = (applicants) =>
	new Promise((resolve, reject) => {
		applicants.forEach((applicant) => {
			applicant.enrolled = true;
			editApplicant(applicant.uid, applicant)
				.then(() => {
					resolve();
				})
				.catch((err) => reject(err));
		});
	});

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

const getCourseById = (courseId) =>
	axios.get(`${baseUrl}/courses/${courseId}.json`).then((response) => {
		const course = response.data;
		return course;
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

// Event Requests
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

// Partner Requests
const getPartners = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/partners.json`)
			.then((response) => {
				const partnerObj = response.data;
				const partners = [];
				if (partnerObj !== null) {
					Object.keys(partnerObj).forEach((partnerId) => {
						partnerObj[partnerId].uid = partnerId;
						partners.push(partnerObj[partnerId]);
					});
				}
				resolve(partners);
			})
			.catch((err) => reject(err));
	});

const postPartner = (newPartner) =>
	axios.post(`${baseUrl}/partners.json`, newPartner);

const editPartner = (partnerId, partner) =>
	axios.put(`${baseUrl}/partners/${partnerId}.json`, partner);

const deletePartner = (partnerId) =>
	axios.delete(`${baseUrl}/partners/${partnerId}.json`);

// Scholarship Requests
const getScholarships = () =>
	new Promise((resolve, reject) => {
		axios
			.get(`${baseUrl}/scholarships.json`)
			.then((response) => {
				const scholarshipObj = response.data;
				const scholarships = [];
				if (scholarshipObj !== null) {
					Object.keys(scholarshipObj).forEach((scholarshipId) => {
						scholarshipObj[scholarshipId].uid = scholarshipId;
						scholarships.push(scholarshipObj[scholarshipId]);
					});
				}
				resolve(scholarships);
			})
			.catch((err) => reject(err));
	});

const postScholarship = (newScholarship) =>
	axios.post(`${baseUrl}/scholarships.json`, newScholarship);

const editScholarship = (scholarshipId, scholarship) =>
	axios.put(`${baseUrl}/scholarships/${scholarshipId}.json`, scholarship);

const deleteScholarship = (scholarshipId) =>
	axios.delete(`${baseUrl}/scholarships/${scholarshipId}.json`);

export default {
	getAllPivotTeam,
	postApplicant,
	getApplicants,
	getStudents,
	getCourses,
	getEvents,
	getPartners,
	getScholarships,
	postStudent,
	postCourse,
	postEvent,
	postPartner,
	postScholarship,
	deleteApplicant,
	deleteStudent,
	deleteCourse,
	deleteEvent,
	deleteScholarship,
	editCourse,
	editScholarship,
	pinIdToCourse,
	loginUser,
	getAllUsers,
	createUser,
	getUserByUid,
	logoutUser,
	getCourseById,
	markAsEnrolled,
	editPartner,
	deletePartner,
};
