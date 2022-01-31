import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Link to="/feladatok" className="nav-link">
            Feladatok
          </Link>
          <Link to="/partnerek" className="nav-link">
            Partnerek
          </Link>
          <Link to="/dolgozok" className="nav-link">
            Dolgozók
          </Link>
          <Link to="/teljesitett" className="nav-link">
            Elvégzett feladatok
          </Link>
          <Link to="/statisztika" className="nav-link">
            Statisztika
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
