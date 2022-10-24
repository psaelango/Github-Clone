import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsJournalCode } from 'react-icons/bs';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row>
          <Col>
            <Navbar.Brand href="/">
              <BsJournalCode />
              &nbsp;
              <span>All Repositories</span>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
