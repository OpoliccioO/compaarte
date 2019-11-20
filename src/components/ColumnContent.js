import React from "react";

function ColumnContent(props) {
  return <div className={`col-lg-${props.sizeColumn}`}>{props.content}</div>;
}

export default ColumnContent;
