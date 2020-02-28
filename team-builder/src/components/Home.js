import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return(
        <div> 
            <h1>Welcome To The Members List</h1>
            <h3>Please Feel Free To Join!</h3>
            <Link to={'/members'}>
            <button>Members</button>
            </Link>
            <Link to={'/add-member'}>
            <button>Join</button>
            </Link>

        </div>
    )
    
};

export default Home;