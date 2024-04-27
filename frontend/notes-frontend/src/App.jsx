import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NoteList from './pages/NoteList';
import Createnote from './pages/Createnote';
import NoteViewEdit from './pages/NoteViewEdit'

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" exact component={<NoteList/>} />
        <Route path="/note/:id" component={<NoteViewEdit/>} />
        <Route path="/create" component={<Createnote/>} />
      </Routes>
    </Router>
 );
}

export default App;
