import React, { useState } from 'react';
import List from './List';



const Form = () => {

    const [teamMember, setTeamMember] = useState({
        fname: '',
        lname: '',
        role: '',
        email: ''
    })

    const [newMembers, setNewMembers] = useState([{
        id: 1,
        fname: 'Matthew',
        lname: 'Bolton',
        role: 'Software Engineer',
        email: 'matthew.bolton.lambda@gmail.com'
    }]);

    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            fname: member.fname,
            lname: member.lname,
            role: member.role,
            email: member.email
        };
        
        setNewMembers([...newMembers, newMember])
        
    };

    const [memberToEdit, setMemberToEdit] = useState();

    const eraseMember = () => {
       setMemberToEdit(teamMember)
       console.log(memberToEdit)
    }

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name] : e.target.value})
    }
    

    const handleSubmit = e => {
        e.preventDefault();
        addNewMember(teamMember);
        console.log(teamMember);
        setTeamMember({fname: '', lname: '', role: '', email: ''})
        
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fname'>
                    First Name:
                    <input onChange={handleChange} type='text' id='fname' name='fname' placeholder='First Name' value={teamMember.fname}/>
                </label>
                <label htmlFor='lname'>
                    Last Name:
                    <input onChange={handleChange} type='text' id='lname' name='lname' placeholder='Last Name' value={teamMember.lname}/>
                </label>
                <label htmlFor='role'>
                    Role:
                    <input onChange={handleChange} type='text' id='role' name='role' placeholder='Role' value={teamMember.role}/>
                </label>
                <label htmlFor='email'>
                    Email:
                    <input onChange={handleChange} type='email' id='email' name='email' placeholder='Email' value={teamMember.email}/>
                </label>
                <button type='submit'>Submit</button>
            </form>

            <List eraseMember={eraseMember} memberToEdit={memberToEdit} newMembers={newMembers} fname={teamMember.fname} lname={teamMember.lname} role={teamMember.role} email={teamMember.email}/>
        </div>
        
       
            
       
       
        
    );
};

export default Form;