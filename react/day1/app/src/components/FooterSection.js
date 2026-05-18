import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class FooterSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "lorem@lorem",
      phone: "1111111",
      copyright: "Copyright © 2019 AT",
    };
  }

  render() {
    return (
      <>
        <div
          id="contact"
          style={{
            backgroundColor: "#1a1a1a",
            padding: "50px 0",
            color: "#fff",
          }}
        >
          <Container>
            <Row className="align-items-center">
              <Col md={4}>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    marginBottom: "15px",
                  }}
                >
                  GET IN TOUCH
                </p>

                <div className="d-flex align-items-center mb-2">
                  <i
                    className="fas fa-envelope me-2"
                    style={{ color: "#aaa", fontSize: "0.9rem" }}
                  ></i>
                  <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
                    {this.state.email}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "#aaa", fontSize: "0.9rem" }}
                  ></i>
                  <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
                    {this.state.phone}
                  </span>
                </div>
              </Col>

              <Col md={4} className="text-center">
                <button
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: 0,
                    padding: "12px 40px",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                  }}
                >
                  CONTACT ME
                </button>
              </Col>

              <Col md={4} className="text-md-end">
                <div className="mb-2">
                  <a href="#" className="me-3" style={{ color: "#fff", fontSize: "1.3rem" }}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="me-3" style={{ color: "#fff", fontSize: "1.3rem" }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" style={{ color: "#fff", fontSize: "1.3rem" }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>

                <p style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: 0 }}>
                  {this.state.copyright}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FooterSection;
