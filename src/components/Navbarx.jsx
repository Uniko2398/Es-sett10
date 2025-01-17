import { Navbar, Container, Nav } from "react-bootstrap";

function Navbarx() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container fluid>
        EpicWheather
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarx;
