import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="d-flex">
        <Row>
          <Col className="mt-5">
            <p className="footer-title">Contacts</p>
            <Col>
              <p className="footer-address">
                18th Floor, W Fifth, 5th Avenue, Taguig, 1630 Metro Manila
              </p>
            </Col>
            <Col>
              <a className="footer-link" href="">
                help@kodego.ph
              </a>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <p className="footer-title">Quick Links</p>
            <ul>
              <li>
                <a className="footer-links" as={Link} to="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  How It works
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  Courses
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  Careers
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  Partners
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="footer-links" as={Link} to="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container></Container>
    </footer>
  );
};

export default Footer;
