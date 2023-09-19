import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dayclasses from "../../../assets/day-classes.jpg";
import forty from "../../../assets/forty.jpg";
import nightclasses from "../../../assets/night-classes.jpg";
import nightclasses2 from "../../../assets/nightclasses2.jpg";

const Courses = () => {
  return (
    <section id="container" className="mt-5">
      <Container>
        <h2 className="text-center">Courses</h2>
        <Row>
          <Col sm={3} md={6} className="mt-3">
            <Card>
              <Card.Img variant="top" src={dayclasses} />
              <Card.Body>
                <Card.Title>Full-Stack Web Development(Day Classes)</Card.Title>
                <Card.Text>
                  Become a full-stack web developer with the fundamentals of
                  both front-end and back-end web development. Enroll now!
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} md={6} className="mt-3">
            <Card>
              <Card.Img variant="top" src={forty} />
              <Card.Body>
                <Card.Title>
                  Full-Stack Web Development (Night Classes + Day Classes on
                  Sat)
                </Card.Title>
                <Card.Text>
                  Become a full-stack web developer with the fundamentals of
                  both front-end and back-end web development.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} md={6} className="mt-3">
            <Card>
              <Card.Img variant="top" src={nightclasses} />
              <Card.Body>
                <Card.Title>
                  Full-Stack Web Development (Night Classes)
                </Card.Title>
                <Card.Text>
                  Our new schedule is designed to accommodate your busy life
                  while equipping you with the fundamentals of front-end and
                  back-end web development.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} md={6} className="mt-3">
            <Card>
              <Card.Img variant="top" src={nightclasses2} />
              <Card.Body>
                <Card.Title>
                  General Virtual Assistant (Night Classes)
                </Card.Title>
                <Card.Text>
                  8-day comprehensive training in client coordination, event
                  management, and more. Pay ₱4,000 upfront or reserve your slot
                  for only ₱2,000! Enroll now.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
