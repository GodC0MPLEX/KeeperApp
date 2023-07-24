import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[notes,setNotes]=useState([]);

  function addNote(note)
  { 
    // console.log("Add item called")
    setNotes(preValue => {
      return [...preValue,note]
    });
    // console.log(notes);
  }
  function delNote(id)
  {
    // console.log(id);
    // console.log("DELETE CALLED");
    setNotes(preValue=>{
      return notes.filter((note,index)=>{
        return index !==id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onCheck={addNote}/>
      {notes.map((note,index) => <Note key={index} id={index} title={note.title} content={note.content } onDel={delNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
