import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';

const NavbarCompoenents = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">철수의 옷장</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">이벤트</Nav.Link>
                            <Nav.Link href="#pricing">대여해주기</Nav.Link>
                            <NavDropdown title="대여하기" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">상의</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    하의
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">아우터</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    신발
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button variant="primary" onClick={handleShow}>
                                로그인
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* 로그인 모달창 */}
            <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Body className="modal-body">
                    <div className="frame">
                        <div className="div">
                            <div className="text-wrapper">
                                철수의 옷장
                                <br />
                                멤버가 되어주세요!
                            </div>
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">이미 회원이신가요? 로그인</div>
                            </div>
                            <div className="overlap-group">
                                <div className="frame-wrapper">
                                    <div className="div-wrapper-2">
                                        <div className="text-wrapper-3">카카오로 시작하기</div>
                                    </div>
                                </div>
                                <img className="image" alt="사진" src="image.png" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavbarCompoenents
