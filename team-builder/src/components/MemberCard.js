import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardDiv = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    background-color: lightgreen;
    padding-bottom: 20px;
    border-radius: 1rem;
`;

const Span = styled.span`
    font-weight: bold;
`;

const MemberCard = (props) => {
    
    const {name, email, role, location} = props.member
    
    return (
        <CardDiv>
            <h2>Member</h2>
            <div><Span>Name: </Span>{name}</div>
            <div><Span>Email: </Span>{email}</div>
            <div><Span>Role: </Span>{role}</div>
            <div><Span>Location: </Span>{location}</div>
            <Link to={`/add-member`}>
                <button onClick={() => props.editMember(props.member, props.id)}>Edit</button>
            </Link>
            
        </CardDiv>
    );
};

export default MemberCard;