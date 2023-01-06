import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from './logo_rickandmorty.png';

export default function MenuTop() {
    return (
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Rick And Morty" height={30}/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/favorites">Favoris</Nav.Link>
                    <Nav.Link href="/episodes">Episodes</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}