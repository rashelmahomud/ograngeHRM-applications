import React, { useEffect, useState } from 'react';
import About from '../Home/About';
import User from './User';

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect( () => {
        const url = `https://gorest.co.in/public/v2/users`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])
    return (
        <div>
            
            {
                user.map(x => <div>
                    <h1>{x.name}</h1>
                    <h1>{x.email}</h1>
                    <h1>{x.gender}</h1>
                    
                </div>)
            }
        </div>
    );
};

export default Users;