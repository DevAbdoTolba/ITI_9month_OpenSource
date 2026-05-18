import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import SkillBar from "./SkillBar";

class SkillsSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      focusItems: [
        "UI/UX Design",
        "Responsive Design",
        "Web Design",
        "Mobile App Design",
      ],
      skills: [
        { name: "HTML", level: 90, labelBg: "#8a8478", fillColor: "#d5d0ca" },
        { name: "CSS", level: 85, labelBg: "#a09888", fillColor: "#d5d0ca" },
        {
          name: "JavaScript",
          level: 75,
          labelBg: "#706860",
          fillColor: "#d5d0ca",
        },
        { name: "React", level: 70, labelBg: "#706860", fillColor: "#d5d0ca" },
        {
          name: "Photoshop",
          level: 80,
          labelBg: "#8a8478",
          fillColor: "#d5d0ca",
        },
        {
          name: "Adobe XD",
          level: 65,
          labelBg: "#706860",
          fillColor: "#d5d0ca",
        },
        {
          name: "Node.js",
          level: 60,
          labelBg: "#8a8478",
          fillColor: "#d5d0ca",
        },
        {
          name: "WordPress",
          level: 55,
          labelBg: "#706860",
          fillColor: "#d5d0ca",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div
          id="skills"
          style={{
            backgroundColor: "#4a4540",
            padding: "70px 0",
            color: "#fff",
          }}
        >
          <Container>
            <div className="text-center">
              <SectionTitle
                title="Skills"
                color="#d5d0ca"
                align="center"
                fontSize="3rem"
                mb="20px"
              />
            </div>

            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#8a8478",
                margin: "0 auto 25px auto",
              }}
            />

            <p
              className="text-center mx-auto"
              style={{
                color: "#c5c0ba",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginBottom: "50px",
              }}
            >
              {this.state.description}
            </p>

            <Row>
              <Col md={4}>
                <div className="text-center">
                  <p
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "2px",
                      fontWeight: 600,
                      color: "#d5d0ca",
                      marginBottom: "15px",
                    }}
                  >
                    MY FOCUS
                  </p>

                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      backgroundColor: "#8a8478",
                      margin: "0 auto 25px auto",
                    }}
                  />

                  {this.state.focusItems.map((item, index) => (
                    <p
                      key={index}
                      style={{
                        color: "#c5c0ba",
                        fontSize: "0.95rem",
                        marginBottom: "15px",
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Col>

              <Col md={8}>
                {this.state.skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skillName={skill.name}
                    level={skill.level}
                    labelBg={skill.labelBg}
                    fillColor={skill.fillColor}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default SkillsSection;
