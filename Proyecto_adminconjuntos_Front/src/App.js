import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Navbar, Container, Nav, Offcanvas, NavDropdown, FormControl } from 'react-bootstrap';
import logoConjunto from './components/Imagenes/logo.PNG'
function App() {
  return (
    <div className="App">
      <div>
        <Navbar style={{ backgroundColor: 'rgba(68, 3, 129, 0.97)', color: 'white', height: '100px' }} >
          <Container fluid>
            <Navbar.Brand className="mx-auto" href="#" style={{ color: 'white', fontSize: '32px', font: 'Mulish', weight: '800' }}  >Adiministración de conjuntos</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <br />
        <img
          alt=""
          src={logoConjunto}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{' '}
        <br />
        <p style={{ fontSize: '32px', font: 'Mulish', fontWeight: 'bold' }}>
          Iniciar sesión
        </p>
        <div ClassName="formato">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: '22px', font: 'Mulish', fontWeight: 'bold' }}>Email </Form.Label>
              <Form.Control className="mx-auto" type="email" placeholder="Ingresar email" style={{ width: '60%', textAlign: 'center' }} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: '22px', font: 'Mulish', fontWeight: 'bold' }}>Contraseña</Form.Label>
              <Form.Control className="mx-auto" type="password" placeholder="Contraseña" style={{ width: '60%', textAlign: 'center' }} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ backgroundColor: 'rgba(68, 3, 129, 0.97)', color: 'white' }} >
              Entrar
            </Button>
          </Form>
        </div>
      </div>


    </div>
  );
}

export default App;
