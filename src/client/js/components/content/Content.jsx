import React from "react";

function Content({ header, content }) {
  return (
    <div className="content">
      {header && content && (
        <div>
          <div className="content-header">Details for {header}</div>
        </div>
      )}
    </div>
  );
}

export default Content;
