import React from 'react';


const List = (props) => {

    const editClick = (e) => {
       let buttonID = e.target.id;
       if (buttonID == props.newMembers.id){
           props.setMemberToEdit(props.newMembers);
       }
       console.log(props.newMembers.id);
       console.log(e.target.id);
       console.log(props.memberToEdit);
    }
    
    return (
        
        <div>
            {props.newMembers.map((elem, i) => {
                return <div key={i} >
                    <h1>Name: {elem.fname} {elem.lname}</h1>
                    <h2>Role: {elem.role}</h2>
                    <h3>Email: {elem.email}</h3>
                    <button type='submit' id={elem.id} onClick={editClick}>Edit Team Member</button>
                </div>
               
            })}
            </div>
            
    

    )

};

export default List;