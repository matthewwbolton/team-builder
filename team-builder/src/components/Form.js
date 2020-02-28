import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {

    const [input, setInput] = useState({name: '', email: '', role: '', location: ''})

    useEffect(() => {
        setInput(props.memberToEdit)
    }, [props.memberToEdit])


    
    const handleChange = e => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addMember(input);
        setInput({name: '', email: '', role: '', location: ''})
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add A Member</h2>
                <label htmlFor='name'>name:
                    <input onChange={handleChange} name='name' type='text' id='name' placeholder='name' value={input.name} />
                </label>
                <label htmlFor='email'>email:
                    <input onChange={handleChange} name='email' type='email' id='email' placeholder='email' value={input.email} />
                </label>
                <label htmlFor='role'>role:
                    <input onChange={handleChange} name='role' type='text' id='role' placeholder='role' value={input.role} />
                </label>
                <label htmlFor='location'>location:
                    <input onChange={handleChange} name='location' type='text' id='location' placeholder='location' value={input.location} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Form;