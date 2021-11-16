import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

function BarraNav() {

  let brand = "Loki Laboratorio"

return (
    <div className="nav">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">{brand}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Servicios</Nav.Link>
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
);
}
export default BarraNav;
