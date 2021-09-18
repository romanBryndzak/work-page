import React from 'react';
import CommentElement from "./CommentElements";

function NoteElement({note}) {
    const NoteComment = note.comments.map(comment =>
        <CommentElement
            comment={comment} key={comment.id}
        />)

    return (
        <ul>
            <li>
                <ul className="noteElement">
                    <p className="noteTitle">
                        <strong>{note.name}</strong>
                        {note.createDate}
                        <button>remove</button>
                    </p>
                    <li>{note.content}</li>
                    <p className="commentTitle">comments</p>
                    {NoteComment}
                </ul>
            </li>
        </ul>
    )
}

export default NoteElement;