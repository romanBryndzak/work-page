import React from 'react';

function Notes() {
    return (
        <div className="note">
            <ul>
                <li>
                    <ul>
                        <p>
                            <strong>Name</strong>
                            "25 may 20:22"
                            <button>remove</button>
                        </p>
                        <li>Hello! How are you?</li>
                        <p>comments</p>
                        <ul className='comments'>
                            <p>Roma 26 may 00:00</p>
                            <li><span>I am fine.</span></li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <ul>
                        <p>
                            <strong>Name</strong>
                            "25 may 20:22"
                        </p>
                        <li>What do we need to do today?</li>
                        <p>comments</p>
                        <ul className='comments'>
                            <p>Roma 26 may 00:00</p>
                            <li><span>We need write a letter our partners.</span></li>
                            <p>Mark 26 may 03:00</p>
                            <li><span>We need learn classes English at evening!</span></li>
                        </ul>
                    </ul>
                </li>
            </ul>


        </div>
    )
}

export default Notes;