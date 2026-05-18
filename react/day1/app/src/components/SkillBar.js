import React from "react";

class SkillBar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div
          className="d-flex align-items-center mb-2"
          style={{ width: "100%" }}
        >
          <div
            style={{
              backgroundColor: this.props.labelBg || "#8a8478",
              color: "#fff",
              minHeight: "2.4rem",
              fontSize: "0.8rem",
              minWidth: "90px",
              lineHeight: "2.4rem",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {this.props.skillName}
          </div>

          <div
            style={{
              flex: 1,
              minHeight: "2.4rem",
              backgroundColor: "#b8b3ad",
              position: "relative",
            }}
          >
            <div
              style={{
                minHeight: "2.4rem",
                width: `${this.props.level}%`,
                backgroundColor: this.props.fillColor || "#d5d0ca",
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default SkillBar;
