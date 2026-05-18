import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import PortfolioCard from "./PortfolioCard";

class PortfolioSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      projects: [
        { title: "WEB DESIGN" },
        { title: "MOBILE DESIGN" },
        { title: "LOGO DESIGN" },
        { title: "WEB APPLICATION\nDEVELOPMENT" },
        { title: "MOBILE APPLICATION\nDEVELOPMENT" },
        { title: "PWA\nDEVELOPMENT" },
      ],
    };
  }

  render() {
    return (
      <>
        <div
          id="portfolio"
          style={{ backgroundColor: "#fff", padding: "70px 0" }}
        >
          <Container>
            <SectionTitle title="Portfolio" color="#333" mb="10px" />

            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#8a8478",
                marginBottom: "40px",
              }}
            />

            <Row className="g-3">
              {this.state.projects.map((project, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <PortfolioCard
                    title={project.title}
                    bgColor={index % 2 === 0 ? "#a09888" : "#4a4540"}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default PortfolioSection;
