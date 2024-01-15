import Modal from 'react-bootstrap/Modal';
import '../assets/css/LoginModal.css';

function LoginModal() {
    return (
        <Modal.Dialog>
            <Modal.Body closeButton>
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
        </Modal.Dialog>
    );
}

export default LoginModal;
