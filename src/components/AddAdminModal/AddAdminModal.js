import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import requests from '../../helpers/data/pivotRequests';

import './AddAdminModal.scss';

const defaultAdminUsesr = {
	uid: '',
	firstName: '',
	lastName: '',
	email: '',
};

function AddAdminModal({ modal, toggle, user }) {
	const [adminUser, setAdminUser] = useState(defaultAdminUsesr);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const theType = passwordVisible ? 'text' : 'password';
	const visibleIcon = passwordVisible ? (
		<VisibilityIcon
			className="eye-icon"
			fontSize="small"
			onClick={togglePasswordVisibility}
		/>
	) : (
		<VisibilityOffIcon
			className="eye-icon"
			fontSize="small"
			onClick={togglePasswordVisibility}
		/>
	);

	const createAndSubmitAdminUser = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((newUser) => {
				const myAdminUser = { ...adminUser };
				const uid = newUser.user.uid;

				myAdminUser.firstName = firstName;
				myAdminUser.lastName = lastName;
				myAdminUser.email = email;
				myAdminUser.uid = uid;
				requests.createAdminUser(myAdminUser).then(() => {
					setAdminUser(defaultAdminUsesr);
					toggle(modal);
				});
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Create New Admin User</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="firstName">First Name</Label>
							<Input
								type="text"
								name="firstName"
								id="firstName"
								placeholder="First Name"
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="lastName">Last Name</Label>
							<Input
								type="lastName"
								name="lastName"
								id="lastName"
								placeholder="Last Name"
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="email">Email</Label>
							<Input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="password">Password</Label>
							<div className="password-div">
								<Input
									type={theType}
									name="password"
									id="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
								{visibleIcon}
							</div>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
					<Button color="primary" onClick={createAndSubmitAdminUser}>
						Create New Admin User
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default AddAdminModal;
