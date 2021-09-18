import React from 'react';

function CommentElement({comment}) {
    return (
        <ul className="comments">
            <p className="commentElementTitle">
                <strong>{comment.name}</strong>
                {comment.createDate}
            </p>
            <li>{comment.comment}</li>
        </ul>
    )
}

export default CommentElement;