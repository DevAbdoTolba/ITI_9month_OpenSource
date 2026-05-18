import React from "react";
import { Container } from "react-bootstrap";
import heroBg from "../hero-bg.jpg";

class HeroSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "Abdo Tolba",
      title: "Frontend Developer",
    };
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
            }}
          />

          <Container
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "3.5rem",
                marginBottom: "10px",
              }}
            >
              {this.state.name}
            </h1>

            <h5
              style={{
                color: "#fff",
                fontWeight: 400,
                fontSize: "1.25rem",
                marginBottom: "30px",
              }}
            >
              {this.state.title}
            </h5>

            <button
              className="btn btn-outline-light"
              style={{
                borderRadius: 0,
                padding: "10px 30px",
                fontSize: "0.85rem",
                letterSpacing: "1px",
              }}
            >
              CONTACT ME
            </button>
          </Container>
        </div>
      </>
    );
  }
}

export default HeroSection;
