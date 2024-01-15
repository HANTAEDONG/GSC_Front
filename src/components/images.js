import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Images() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" alt='예시1' rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" alt='예시2' roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" alt='예시3' thumbnail />
                </Col>
            </Row>
        </Container>
    );
}

export default Images;
