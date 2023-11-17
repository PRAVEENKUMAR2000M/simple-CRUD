import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateForm({ SelectOption, notes }) {
    const [SelectedNote, setSelecteNotes] = useState(null);
    const [editContent, seteditContent] = useState('');
    const [editImportant, seteditImportant] = useState('false');

    const fetchNotes = async () => {
        try {
            if (SelectOption !== 'select an id') {
                const response = await axios.get(`http://localhost:3000/notes/${SelectOption}`);
                console.log(response.data);
                if (response.data) {
                    setSelecteNotes(response.data);
                    seteditContent(response.data.content);
                    seteditImportant(response.data.important);
                }
            }
        } catch (error) {
            console.error("Data fetching error:", error);
        }
    }


    useEffect(() => {
        fetchNotes();
    }, [SelectOption]);

    const updateNote = (event) => {
        event.preventDefault();
        console.log("updating the notes")

        //prepare the object to update
        const note = {
            id: SelectedNote.id,
            content: editContent,
            important: editImportant,
        }
        axios.put(`http://localhost:3000/notes/${SelectedNote.id}`, note)
            .then(response => {
                console.log(response);
                console.log("note updated sucessfully");
            })
            .catch(error => {
                console.error("data fetching:", error);
            })
    }

    return (
        <div>
            <h2>Update form</h2>
            {
                !SelectedNote ? (
                    <p>Loading data...</p>
                ) : (
                    <form onSubmit={updateNote}>
                        <label>
                            content: &nbsp; &nbsp; &nbsp;
                            <input
                                value={editContent}
                                onChange={(e) => seteditContent(e.target.value)}
                            />
                        </label>
                        <label>
                            <br></br><br></br>
                            important: &nbsp;
                            <select value={editImportant ? 'true' : 'false'}
                                onChange={(e) => seteditImportant(e.target.value === 'true')}>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </label>
                        <br></br><br></br>
                        <button type='submit'>Update Note</button>
                    </form>
                )
            }
        </div>
    )
}

export default UpdateForm;
