import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import Home from './components/Home';
import MembersList from './components/MembersList';
import { Route } from 'react-router-dom';

function App() {
  
  const [member, setMember] = useState([{ name: 'matthew', email: 'matthewwbolton@gmail.com', role: 'web development', location: 'atlanta'}])

    const [memberToEdit, setMemberToEdit] = useState({name: '', email: '', role: '', location: '' })
  
    const addMember = (newMember) => {
  
      setMember([{...member, newMember}])
  
    }
  
    const editMember = (info, id) => {
      setMemberToEdit(info);
      console.log(id);
    }
    
    return (
      <div className="App">
        <Route path='/' component={Home}/>
        <Route path='/members' render={props => <MembersList {...props} member={member} editMember={editMember}/>} />
        <Route path='/add-member' render={props => <Form {...props} addMember={addMember} memberToEdit={memberToEdit}/>}/>
      </div>
    );

}

export default App;
