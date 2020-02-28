import React from 'react';
import { Link } from 'react-router-dom';
import MemberCard from './MemberCard';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
`;

const MembersList = (props) => {
    
    return (
        <CardContainer>
            {props.member.map((elem, i) => {
                return (
                    <MemberCard key={i} member={elem} editMember={props.editMember} id={Date.now()}/>
                )
            })}

            <Link to={'/'}>
                <button>Home</button>
            </Link>
        
        
        </CardContainer>
    );
};

export default MembersList;