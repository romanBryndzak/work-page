import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import NavBar from './page/NavBar';
import Notes from './page/Notes';
import Create from './page/Create';
import Edit from './page/Edit';
import Setting from './page/Setting';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <NavBar/>
            </header>
            <hr/>
            <div className="App-body">
                <Route path='/Notes'><Notes/></Route>
                <Route path='/Create'><Create/></Route>
                <Route path='/Edit'><Edit/></Route>
                <Route path='/Setting'><Setting/></Route>
            </div>
        </div>
    );
}

export default App;
