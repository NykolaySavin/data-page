import React from 'react';
import MenuItem from "./menuItem/MenuItem";

function Menu({items, selectedItem,select,changeContent}) {
    return (
        <div className="menu">
            {items.map(item=><MenuItem key={item} header={item} selected={item===selectedItem} onClick={select} changeContent={changeContent}/>)}
        </div>
    );
}

export default Menu;
