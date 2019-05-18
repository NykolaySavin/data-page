import React from 'react';
function MenuItem({header,selected,onClick,changeContent}) {
    const className = selected?"menu-item selected":"menu-item";
    return (
        <div className={className} onClick={()=>{onClick(header);changeContent(header)}}>
            <div className="text">{header}</div>

        </div>
    );
}

export default MenuItem;
