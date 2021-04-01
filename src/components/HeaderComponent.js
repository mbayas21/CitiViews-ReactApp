import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { Navbar, 
    NavbarBrand, 
    Nav, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    Jumbotron,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody,
    ModalFooter,
    Form, 
    FormGroup, 
    Input, 
    Label, } from 'reactstrap';
import NavLink from 'reactstrap/lib/NavLink';

const HeaderComponent = () => {

    const [show, setShow] = useState(false);

    const handlleModal = () => setShow(true);

    return (
        <>
            <Navbar className="navbar navbar-expand-sm navbar-light justify-content-between pb-3" id="navBar">
                <NavbarToggler type="button" data-toggle="collapse" data-target="#navigationCollapse">
                    <i className="navbar-toggler-icon"></i>
                </NavbarToggler>
                <a href="index.html" className="navbar-brand" id="mobile-branding">CitiViews</a>
                <Collapse className="collapse navbar-collapse justify-content-center" id="navigationCollapse">
                    <ul className="navbar-nav">
                        <NavbarBrand href="">CitiViews</NavbarBrand>
                        <NavItem>
                            <NavLink>Photo Gallery</NavLink>
                        </NavItem>
                        <li className="nav-item">
                            <a className="nav-link">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                    </ul>
                </Collapse>
                <Collapse className="collapse navbar-collapse justify-content-center" id="navigationCollapse">
                    <ul className="navbar-nav">
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link" data-toggle="modal" data-target="#signUpModal">
                                <i className="fa fa-user-plus fa-lg" data-toggle="tooltip" data-placement="bottom" title="Sign Up" onClick={handlleModal}></i>
                            </NavLink> 
                        </NavItem>
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-search fa-lg" data-toggle="tooltip" data-placement="bottom" title="Advanced Search"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item px-2">
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-user-circle fa-lg" data-toggle="tooltip" data-placement="bottom" title="My Profile"></i>
                            </NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>

            <div id="signUpModal" className="modalFade" role="dialog">
                <div className="modalDialog" role="document">
                    <Modal className="modal-content" show={show}>
                        <ModalHeader title="Sign Up">Sign Up
                            <Button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </Button>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="userNameInput">Username</label>
                                    <input type="text" className="form-control" id="userNameInput" placeholder="Enter User Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailInput">Email</label>
                                    <input type="text" className="form-control" id="emailInput" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Enter Password" />
                                </div>
                            </Form> 
                        </ModalBody>
                        <ModalFooter className="justify-content-center">
                            
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            <Jumbotron className="jumbotron jumbotron-fluid bg-dark">
                <div id="form-div">
                    <h1 className="text-center text-white" id="testing">Find a city to visit:</h1>
                    <p className="text-center text-white">Search a city below for your next adventure experience</p>
                    <form action="" className="form-inline justify-content-center">
                        <input type="text" placeholder="search" className="form-control mr-sm-2 mr-lg-5" />
                        <button type="submit" className="btn btn-primary ml-sm-2 ml-lg-5 px-4">Search</button>
                    </form>
                </div>
            </Jumbotron>
        </>
    )
}

export default HeaderComponent

