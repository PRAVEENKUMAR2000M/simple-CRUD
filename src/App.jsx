//implement simple CRUD 


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Dashbord from './Dashbord';
import ReadNotes from './ReadNotes';
import CreateNotes from './CreateNotes';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';


function App() {
  //method 1;

  // //define states
  // let [notes, setnotes] = useState([]);
  // //get the data
  // useEffect(() => {
  //   // run for the first time and only one time
  //   setnotes(props.notes);
  // }, []);
  //method 2;

  let [notes, setNotes] = useState([]);
  let [showStatus, setShowStatus] = useState('all');
  let [newNoteContent, setnewNoteContent] = useState('');
  let [newNoteImportant, setnewNoteImportant] = useState('false');

  // const fetchNotes = async () => {
  //   await axios.get("http://localhost:3000/notes")
  //   .then(response => {
  //     setNotes(response.data)
  //   })
  // }

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };


  useEffect(() => {
    axios.get("http://localhost:3000/notes")
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error("error fetching data", error)
      });
  }, [])

  useEffect(() => {
    fetchNotes();
  }, []);

  let handleStatuschange = (event) => {
    setShowStatus(event.target.value)
  }



  const addNote = (event) => {
    event.preventDefault();
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant === 'true'
    }
    setNotes(notes.concat(noteObject))
    setnewNoteContent('');
    setnewNoteImportant('');

    console.log('add new note adding...');
    axios.post('http://localhost:3000/notes', noteObject)
      .then(response => {
        console.log('new note added....')
      })
  }

  const padding = {
    padding: 15,
  }
  return (
    <div>
      <Router>
        <div>
          <Link to='/Dashbord'>Dashbord</Link>
          <Link to='/read' style={padding}>ReadNotes</Link>
          <Link to='/createnote'>CreateNote</Link>
          <Link to='/editnote' style={padding}>EditNote</Link>
          <Link to='/deletenote'>DeleteNote</Link>
        </div>
        <Routes>
          <Route path='/Dashbord' element={<Dashbord />} />
          <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatuschange={handleStatuschange} notes={notes} />} />
          <Route path='/createnote' element={<CreateNotes newNoteContent={newNoteContent} newNoteImportant={newNoteImportant} addNote={addNote} setnewNoteContent={setnewNoteContent} setnewNoteImportant={setnewNoteImportant} />} />
          <Route path='/editnote' element={<EditNote notes={notes} />} />
          <Route path='/deletenote' element={<DeleteNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;