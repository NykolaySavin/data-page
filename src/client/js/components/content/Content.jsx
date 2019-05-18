import React from "react";

function Content({ header, content:{columns,values,name},prevPage,nextPage ,index}) {
  return (
    <div className="content">
      {header && name&&columns&&values[index] && (
        <div>
          <div className="content-header">Details for {header}</div>
            <div className="caption">{name}</div>
            <div className="buttons"> <div className="button" onClick={prevPage}>Previous</div> <div className="button" onClick={nextPage}>Next</div></div>

          <div className="table">
              {values[index].map((item,i)=>item?<div className="row" key={i}><div className="left">{columns[i]+":"}</div><div className="right">{item}</div></div>:null)}

          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
