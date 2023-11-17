import React from 'react'

function ReadNotes({ showStatus, handleStatuschange, notes }) {
    let filterNotes = (notes, showStatus) => {
        switch (showStatus) {
            case 'all':
                return notes;
            case 'imp':
                return notes.filter(note => note.important === true);
            case 'non imp':
                return notes.filter(note => note.important === false);
        }
    }

    let notesFiltered = filterNotes(notes, showStatus);
  return (
      <div>
          <h1>Notes</h1>
          <label>
              <input
                  type='radio'
                  name='filter'
                  value='all'
                  checked={showStatus === 'all'}
                  onChange={handleStatuschange}
              />
              All Notes
          </label>
          <label>
              <input
                  type='radio'
                  name='filter'
                  value='imp'
                  checked={showStatus === 'imp'}
                  onChange={handleStatuschange}
              />
              Important Notes
          </label>
          <label>
              <input
                  type='radio'
                  name='filter'
                  value='non imp'
                  checked={showStatus === 'non imp'}
                  onChange={handleStatuschange}
              />
              Non Important Notes
          </label>
          <ul>
              {
                  notesFiltered.map(note => {
                      return (
                          <li key={note.id}>{note.content}</li>

                      )
                  })
              }
          </ul>
    </div>
  )
}

export default ReadNotes