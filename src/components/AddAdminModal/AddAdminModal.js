import React, { useState } from 'react';
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

import './AddAdminModal.scss';

const defaultAdminUsesr = {
	uid: '',
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

function AddAdminModal({ modal, toggle }) {
	const [adminUser, setAdminUser] = useState(defaultAdminUsesr);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);
	const [firstName, setFirstName] = useState(false);
	const [lastName, setLastName] = useState(false);

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
			.then((authUser) => {
				const myAdminUser = { ...adminUser };
				myAdminUser.firstName = firstName;
				myAdminUser.lastName = lastName;
				setAdminUser(defaultAdminUsesr);
				toggle(modal);
			});
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Create New Admin User</ModalHeader>
				<ModalBody>
					<Form>
						{/* Keeping this out until I can get the names to properly save
            and display. */}
						{/* <FormGroup>
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
						</FormGroup> */}

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
