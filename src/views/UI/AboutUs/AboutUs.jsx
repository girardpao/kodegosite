import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SamplePicture from "../../../assets/kodego-samplepicture.png";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <div className="about-text">
              <h1>
                We don’t just teach <br />
                code.
              </h1>
              <p>
                We teach code that gets you hired. At KodeGo, our graduates
                undergo intensive tech bootcamps and are then placed with our
                Company partners
              </p>
            </div>
            <Button variant="success">Apply Now</Button>
          </Col>
          <Col>
            <img src={SamplePicture} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
