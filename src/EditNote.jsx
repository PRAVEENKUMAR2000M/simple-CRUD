import React, { useState } from 'react'
import UpdateForm from './UpdateForm';

function EditNote({ notes}) {
  const [SelectOption, setSelectOption] = useState('select an id')
  const selectHandler = (event) => {
    setSelectOption(event.target.value)
    // console.log(event.target.value);
  }
  return (
      <div>
      <h1>EditNote</h1>
      <label>
        select the note id to the edit note: &nbsp;
        <select onChange={selectHandler} value="">
          
          {
            notes.map(note => {
              return <option key={note.id}>{note.id}</option>
            })
         }
        </select>
      </label>
      <div>
        {SelectOption !== 'select an id' && <UpdateForm SelectOption={SelectOption} notes={notes} />}
     </div>
    </div>
  )
}

export default EditNote