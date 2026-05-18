import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

class AboutSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo",
    };
  }

  render() {
    return (
      <>
        <div id="about" style={{ backgroundColor: "#fff", padding: "80px 0" }}>
          <Container>
            <Row>
              <Col md={3}>
                <SectionTitle title="About me" color="#555" />
              </Col>

              <Col md={9}>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    marginBottom: "30px",
                  }}
                >
                  {this.state.description}
                </p>

                <a
                  href="/resume.pdf"
                  download="Abdo Tolba CV.pdf"
                  className="btn"
                  style={{
                    backgroundColor: "#555",
                    color: "#fff",
                    borderRadius: 0,
                    padding: "12px 35px",
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                  }}
                >
                  Download Resume
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default AboutSection;
