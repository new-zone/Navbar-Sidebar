import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPhone() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Main.js">Dashboard</Nav.Link>

            <Nav.Link href="#">Login Activity</Nav.Link>

            <NavDropdown title="Mail Box" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Surat Masuk
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Surat Keluar
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Edit" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Surat Masuk
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Surat Keluar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPhone;