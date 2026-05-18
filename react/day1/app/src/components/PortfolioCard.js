import React from "react";

class PortfolioCard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: this.props.bgColor,
            width: "100%",
            height: "200px",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "1.5px",
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: "12px",
              whiteSpace: "pre-line",
            }}
          >
            {this.props.title}
          </p>

          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        </div>
      </>
    );
  }
}

export default PortfolioCard;
