import React, { useState } from 'react';
import UpdateForm from './UpdateForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteForm({ notes, setNotes, SelectOption }) {
  let selectNotes = notes.find(note => note.id == SelectOption);

  let navigate = useNavigate()

  let DeleteNotes = async () => {
    try {
      await axios.delete(`http://localhost:3000/notes/${SelectOption}`)
      console.log("note successfully deleted", response);
      let selectedNote = notes.find(note => note.id == SelectOption)
      const navigate = useNavigate();
    } catch (error) {
      console.log("data fetching", error);
    }
  }
  return (
    <div>
      <label>
        ID: {selectNotes.id}<br></br><br></br>
        content: {selectNotes.content}<br></br><br></br>
        important: {selectNotes.important ? 'yes' : 'no'}
      </label>
      <br></br><br></br>
      <button onClick={DeleteNotes}>Delete Note</button>
    </div>
  )
}



function DeleteNote({ notes, setNotes }) {
  const [SelectOption, setSelectOption] = useState('select an id')
  const selectHandler = (event) => {
    setSelectOption(event.target.value)
    // console.log(event.target.value);
  }
  return (
    <div>
      <h1>DeleteNotes</h1>
      <label>
        select the note id to the edit note: &nbsp;
        <select onChange={selectHandler} value="">

          {
            notes.map(note => {
              return <option key={note.id}>{note.id}</option>
            })
          }
        </select><br></br><br></br>
      </label>
      <div>
        {SelectOption !== 'select an id' && <DeleteForm SelectOption={SelectOption} notes={notes} setNotes={setNotes} />}
      </div>
    </div>
  )
}

export default DeleteNote;