import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/sidebarandro.css'

function SidebarAndro () {
  return (
    <Navbar expand="lg" className="sidebar-andro">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='togglenavbar'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Dashboard</Nav.Link>

            <Nav.Link href="#">Login Activity</Nav.Link>

            <NavDropdown title="Mail Box" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="nav-drop-items">
                Surat Masuk
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-drop-items">
                Surat Keluar
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Edit" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="nav-drop-items">
                Surat Masuk
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-drop-items">
                Surat Keluar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SidebarAndro;