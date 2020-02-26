import React from 'react';


const List = (props) => {
    
    return (
        
        <div>
            {props.newMembers.map((elem, i) => {
                return <div key={i}>
                    <h1>{elem.fname} {elem.lname}</h1>
                    <h2>{elem.role}</h2>
                    <h3>{elem.email}</h3>
                </div>
            })}
            <button>Edit Team Member</button>
        </div>
    

    )

};

export default List;