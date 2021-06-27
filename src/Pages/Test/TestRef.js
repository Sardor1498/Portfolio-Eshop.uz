import React, { useRef } from 'react';

export default function TestRef(props) {
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput}
            />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    )
}