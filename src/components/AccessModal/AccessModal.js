import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdminLoginModal from '../AdminLoginModal/AdminLoginModal';

function AccessModal({ modal }) {
	const [adminModal, setAdminModal] = useState(false);
	const [accessModal, setAccessModal] = useState(false);

	useEffect(() => {
		setAccessModal(modal);
	}, []);

	const modalToggle = () => setAdminModal(!adminModal);

	const navToHome = () => {
		window.location.assign('./home');
	};

	return (
		<div>
			<AdminLoginModal toggle={modalToggle} modal={adminModal} />
			<Modal isOpen={accessModal}>
				<ModalHeader className="modal-header">Access Denied</ModalHeader>
				<ModalBody>
					<p>You must log in to gain access to the admin page.</p>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={navToHome}>
						Back Home
					</Button>
					<Button color="primary" onClick={modalToggle}>
						Login
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default AccessModal;
