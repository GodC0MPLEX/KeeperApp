import React, { useState } from "react";

function CreateArea(props) {
  // console.log("CREATEAREA STARTE
  // const date= new Date();
  // const time = date.getMilliseconds();
  // console.log(time);
  const[note,setNote] = useState({
    title:"",
    content:"",
    // time:""
  })

  function handleChange(event)
  {
    const{name,value}=event.target;
    setNote(preValue => {
      return {...preValue,[name]:value}
    })
  }

  function handleClick(event)
  {
    props.onCheck(note);
    event.preventDefault();
    setNote({title:"",content:""})
    // console.log(note);
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
