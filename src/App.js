import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './page/NavBar';
import Notes from './page/Notes';
import Create from './page/Create';
import Edit from './page/Edit';
import Setting from './page/Setting';

function App() {
    let object = [{
        id: 0, name: "Roma", createDate: "15 September 12:22",
        content: "Hello! How are you?",
        comments: [
            {
                id: 0, name: "Roma", createDate: "16 September 13:22",
                comment: "I am fine, thanks.",
            }
        ]
    },
        {
            id: 1, name: "Pedro", createDate: "16 September 11:22",
            content: "What do we need to do today?",
            comments: [
                {
                    id: 0, name: "Roma", createDate: "17 September 12:22",
                    comment: "We need write a letter our partners.",
                },
                {
                    id: 1, name: "Mark", createDate: "17 September 13:22",
                    comment: "We need to learn classes English at evening! ",
                }
            ]
        }
    ]

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <NavBar/>
            </header>
            <hr/>
            <div className="App-body">
                <Route path='/Notes' render={() =>
                    <Notes notes={object}/>
                }/>
                <Route path='/Create'><Create/></Route>
                <Route path='/Edit'><Edit/></Route>
                <Route path='/Setting'><Setting/></Route>
            </div>
        </div>
    );
}

export default App;
