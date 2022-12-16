import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNavBar() {
  return (
    <div className="title nav-bar-content">
      <Navbar className="navbar-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="header">OZGE ABAYAS</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav>
              <Nav.Link href="#action1">
                <i class="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link href="#action2">User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
