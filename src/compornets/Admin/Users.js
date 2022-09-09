import React, { useEffect, useState } from 'react';

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect( () => {
        fetch('https://gorest.co.in/public/v2/users')
        .then(res =>res.json())
        .then(data => console.log(data))
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default Users;