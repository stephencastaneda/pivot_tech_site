import React, { useState } from 'react';
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
import pivotRequests from '../../helpers/data/pivotRequests';
import './AdminLoginModal.scss';
import 'firebase/auth';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const userInfo = {
	email: '',
	password: '',
	uid: '',
};

const AdminLoginModal = ({ toggle, modal }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [loginInfo, setLoginInfo] = useState(userInfo);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const login = (e) => {
		e.preventDefault();
		pivotRequests.loginUser(e, loginInfo.email, loginInfo.password);
		toggle(modal);
	};

	const formFieldStringState = (name, e) => {
		e.preventDefault();
		const tempInfo = { ...loginInfo };
		tempInfo[name] = e.target.value;
		setLoginInfo(tempInfo);
	};

	// Form change functions. Updates the course state whenever the user types something new.
	const emailChange = (e) => {
		formFieldStringState('email', e);
	};

	const passwordChange = (e) => {
		formFieldStringState('password', e);
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

	return (
		<div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader className="modal-header" toggle={toggle}>
					Login
				</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="email">Email</Label>
							<Input
								type="text"
								name="email"
								id="email"
								placeholder="Email"
								onChange={emailChange}
								value={loginInfo.email}
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
									onChange={passwordChange}
									value={loginInfo.password}
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
					<Button color="primary" onClick={login}>
						Log In
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default AdminLoginModal;
