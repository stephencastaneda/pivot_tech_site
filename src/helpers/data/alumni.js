import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllAlumni = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/alumni.json`)
    .then((response) => {
      const alumni = response.data;
      const graduates = [];
      if (alumni !== null) {
        Object.keys(alumni).forEach((alumniId) => {
          alumni[alumniId].id = alumniId;
          graduates.push(alumni[alumniId]);
        });
      }
      resolve(graduates);
    })
    .catch((err) => reject(err));
});

export default { getAllAlumni };