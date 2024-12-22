import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Services Section */}
        <h2 style={{ fontSize: "2.6em", marginTop: "40px", fontWeight: 'normal', textAlign: 'center', color: 'var(--imp-text-color)' }}>
          SERVICES I OFFER
        </h2>
        <p className="home-about-body" style={{ textAlign: 'center'  }}>
          As a freelancer and software engineer, I offer a range of services to help bring your projects to life:
        </p>
        <Row className="justify-content-center">
          {/* First Row of 4 Cards */}
          <Col sm={12} md={6} lg={3} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Building responsive, user-friendly websites using modern technologies like React.js, Next.js, and Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Custom Web Applications</Card.Title>
                <Card.Text>
                  Full-stack development of tailored web applications to meet your business needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Blockchain Development</Card.Title>
                <Card.Text>
                  Developing decentralized applications (dApps) and smart contracts on blockchain platforms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Machine Learning & AI</Card.Title>
                <Card.Text>
                  Designing and deploying machine learning models to solve real-world problems using tools like Python and Spyder.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Second Row of 2 Cards */}
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Consultation & Training</Card.Title>
                <Card.Text>
                  Providing expert advice and training on software engineering, web development, and machine learning topics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Bug Fixes & Optimization</Card.Title>
                <Card.Text>
                  Analyzing and improving the performance of your existing applications by fixing bugs and optimizing code.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
