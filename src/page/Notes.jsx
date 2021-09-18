import React from 'react';
import NoteElement from "./NoteElement";

function Notes({notes}) {
    return (
        <div className="note">
            {notes.map(note => {
               return <NoteElement
               note={note} key={note.id}
               />
            })}
        </div>
    )
}

export default Notes;