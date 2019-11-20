import React from "react";
import PropTypes from "prop-types";

function TextBox(props) {
  const { title, text, hStyle, pStyle } = props;

  const titleJsx = {
    1: <h1 style={hStyle}>{title}</h1>,
    2: <h2 style={hStyle}>{title}</h2>,
    3: <h3 style={hStyle}>{title}</h3>,
    4: <h4 style={hStyle}>{title}</h4>,
    5: <h5 style={hStyle}>{title}</h5>,
    6: <h6 style={hStyle}>{title}</h6>
  };

  return (
    <>
      {titleJsx[props.titleType]}
      <p style={pStyle}>{text}</p>
      {props.children}
    </>
  );
}

TextBox.defaultProps = {
  titleType: 2
};

TextBox.propTypes = {
  titleType: PropTypes.number,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TextBox;
