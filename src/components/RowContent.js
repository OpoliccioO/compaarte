import React from "react";
import ColumnContent from "./ColumnContent";
import PropTypes from "prop-types";

export default function RowContent(props) {
  return (
    <div className="row m-0 container-content">
      {props.colsContent.map(col => (
        <ColumnContent
          key={col.colId}
          sizeColumn={col.sizeColumn}
          content={col.content}
        />
      ))}
    </div>
  );
}

RowContent.defaultProps = {};

RowContent.propTypes = {};
