import React, { useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
} from 'reactstrap';
import './MyNavbar.scss';
import AdminLoginModal from '../AdminLoginModal/AdminLoginModal';

const Example = ({ isAuthed, logoutClickEvent }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [adminModal, setAdminModal] = useState(false);

	const modalToggle = () => setAdminModal(!adminModal);

	const navToggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<AdminLoginModal toggle={modalToggle} modal={adminModal} />
			<Navbar color="blue" light expand="md">
				<NavbarBrand href="/">
					<img
						src="https://static.wixstatic.com/media/8a0dcf_3a417a1d21f2488b837b15729c409d96~mv2.png/v1/fill/w_98,h_79,al_c,q_85,usm_0.66_1.00_0.01/PivotTech%20Portrait.webp"
						style={{ width: 33, height: 30 }}
						alt="Pivot Tech Logo"
					/>
				</NavbarBrand>
				<NavbarToggler onClick={navToggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/home">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/programs">Programs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/pivot-team">Pivot Team</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/make-the-pivot">Make The Pivot</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								More
							</DropdownToggle>
							<DropdownMenu right>
								{/* <DropdownItem tag={Link} href="/assessment">
									Assessment
								</DropdownItem> */}
								{/* <DropdownItem tag={Link} href="/mentor-program">
									Mentor Program
								</DropdownItem> */}
								<DropdownItem tag={Link} href="/pivot-graduates">
									Pivot Graduates
								</DropdownItem>
								<DropdownItem tag={Link} href="/pivot-partners">
									Pivot Partners
								</DropdownItem>
								<DropdownItem tag={Link} href="/scholarship-application">
									Scholarship Application
								</DropdownItem>

								{!isAuthed ? (
									<>
										<DropdownItem onClick={modalToggle}>
											Admin Login
										</DropdownItem>
									</>
								) : (
									<>
										<DropdownItem tag={Link} href="/admin">
											Admin Page
										</DropdownItem>
										<DropdownItem onClick={logoutClickEvent}>
											Logout
										</DropdownItem>
									</>
								)}
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<Button
						tag={Link}
						href="pivot-application"
						style={{ backgroundColor: '#FD8918' }}
					>
						Apply
					</Button>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
