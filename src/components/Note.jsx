import React from "react";

function Note(props) {
  // const time = new Date();
  
  function handleClick(event)
  {
    // console.log("DeLETE PRESSED")
    props.onDel(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.time}</p>
      {/* <p>{new Date().getHours()}:{new Date().getMinutes()}</p> */}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
