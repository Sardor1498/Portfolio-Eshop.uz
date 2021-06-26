import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch } from "react-redux";

export default function Toggle(props) {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const toggleDarkMode = (checked = true) => {
        setIsDarkMode(checked);
    };
    const dispatch = useDispatch();
    console.log(Toggle);
    dispatch({type: "ADD_TOGGLE_SUCCESS", payload: isDarkMode})
    return (
        <DarkModeToggle
            style="#1E3A8A"
            onChange={toggleDarkMode}
            checked={isDarkMode}
            size={60}
        />
    );
};