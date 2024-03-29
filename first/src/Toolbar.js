import React from "react";

class Toolbar extends React.Component {
  render() {
    const styles = {
      toolbar: {
        border: "10px solid pink",
      },
      dark: {
        background: "purple",
        color: "white",
      },
    };

    return (
      <div style={{ ...styles.toolbar, ...styles.dark }}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
