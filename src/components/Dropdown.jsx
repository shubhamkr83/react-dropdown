import React, { useState } from "react";

const Dropdown = ({ options }) => {

    const [selected, setSelected] = useState("");
    const [display, setDisplay] = useState(false);

    const showSelectedOption = (e) => {
        // select item 
        setSelected(e.target.innerText);
        // dropdown menu is hide when selected
        setDisplay(false);
    };

    // use map fuction to show the options
    const menuItems = options.map((item) => {
        return <li onClick={showSelectedOption}>{item}</li>;
    });

    return (
        <div className="dropdown" >
            {/* on mouse hover we set the display of dropdown items as true */}
            <div onMouseEnter={() => setDisplay(true)} className="dropdown-menu">
                <span>Select an option</span>
                <i className="fa-solid fa-caret-down"></i>
            </div>

            {/* show items when dropdown display */}
            {display ? <ul className="menu-items">{menuItems}</ul> : ""}

            {/* shows the selected item */}
            <h3 className="select_option">Selected Option : {selected}</h3>
        </div>
    );
}

export default Dropdown;