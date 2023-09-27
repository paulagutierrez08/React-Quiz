import React from "react";

import "../Styles/header.css"

function Header ({title}){
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;