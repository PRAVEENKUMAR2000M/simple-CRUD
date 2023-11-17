import React from 'react'

function CreateNotes({addNote, newNoteContent, newNoteImportant, setnewNoteContent, setnewNoteImportant}) {
  return (
      <div>
          <form onSubmit={addNote}>
              <label>
                  <h1>Add New Note</h1>
                  content: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <input
                      type='text'
                      typeof='submit'
                      onChange={(e) => setnewNoteContent(e.target.value)}
                      value={newNoteContent}
                  />
                  <br></br><br></br>
                  important: &nbsp; &nbsp; &nbsp; &nbsp;
                  <select onChange={(e) => setnewNoteImportant(e.target.value)}
                      value={newNoteImportant}>
                      <option>--select--</option>
                      <option>true</option>
                      <option>false</option>
                  </select>
                  <br></br><br></br>
                  <button type='submit'>Add new note</button>
              </label>
          </form>
    </div>
  )
}

export default CreateNotes