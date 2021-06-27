import React, { useRef } from 'react';
import { createRef } from 'react';

export default function TestRefFile(props) {

    const fileInput = createRef();

    function handleSubmit(e) {
        e.preventDefault();
        // alert()
        console.log(fileInput.current.files)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Upload file:
                <input type="file" ref={fileInput}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )

    
}