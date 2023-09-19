import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/kodego-logo.png";
import "../Header/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-light">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/howItWorks">
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/tuition">
              Tuition
            </Nav.Link>
            <Nav.Link as={Link} to="/partners">
              Partners
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/signIn">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/applyNow">
              Apply Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
