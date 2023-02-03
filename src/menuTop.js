import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from './logo_rickandmorty.png';
import { connect } from 'react-redux';


const MenuTop = (props) => {
    const { isLoggedIn } = props;
    console.log(isLoggedIn);

    return (
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Rick And Morty" height={30}/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/favorites">Favoris</Nav.Link>
                    <Nav.Link href="/episodes">Episodes</Nav.Link>
                    { isLoggedIn ? (
                        <Nav.Link href="/logout">Déconnexion</Nav.Link> ) : (
                        <>
                            <Nav.Link href="/register">Inscription</Nav.Link>
                            <Nav.Link href="/login">Connexion</Nav.Link>
                        </>
                    )
                    }

                </Nav>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        email: state.email
    };
}

export default connect(mapStateToProps)(MenuTop);