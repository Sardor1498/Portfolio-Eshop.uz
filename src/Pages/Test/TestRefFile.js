import React, { useRef } from 'react';

export default function TestRefFile(props) {

  const fileInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // alert(
    //   `Selected file - ${fileInput.current.files[0].name}`
    // );
    console.log(fileInput.current.files);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )

}