import firebase from 'firebase/app';
import 'firebase/auth';
import * as admin from 'firebase-admin';

import firebaseConfig from '../apiKeys.json';

const firebaseApp = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig.firebaseKeys);
		// admin credential for localhost or emulator
		admin.initializeApp({
			credential: admin.credential.applicationDefault(),
			databaseURL: 'https://pivot-dac4c.firebaseio.com',
		});
	}
};

export default firebaseApp;
