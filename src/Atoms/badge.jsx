import React from "react";

import "../Styles/badge.css"

function Badge ({label}){
    return (
        <span className="badge">
            {label}
        </span>
    );
}

export default Badge;