import React from "react";

class SectionTitle extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: this.props.fontSize || "2.8rem",
            color: this.props.color || "#333",
            textAlign: this.props.align || "left",
            marginBottom: this.props.mb || "20px",
          }}
        >
          {this.props.title}
        </h2>
      </>
    );
  }
}

export default SectionTitle;
