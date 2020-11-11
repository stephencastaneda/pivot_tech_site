import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SubscriberModal({ modal, course, toggle }) {
	const modalToggle = () => toggle(!modal);

	const navToHome = () => {
		window.location.assign('./home');
	};

	return (
		<div>
			<Modal isOpen={modal} toggle={modalToggle}>
				<ModalHeader className="modal-header">
					Thanks for Subscribing!
				</ModalHeader>
				<ModalBody>
					<p>We'll keep you informed on upcoming courses and events.</p>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={navToHome}>
						Back Home
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default SubscriberModal;
