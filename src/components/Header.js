import React, { useState } from "react";

function HeaderToggleMode ( { onDarkModeClick, mode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick= { onDarkModeClick }>
                {mode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default HeaderToggleMode

