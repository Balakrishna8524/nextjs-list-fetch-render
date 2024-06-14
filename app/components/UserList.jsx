"use client";

import React, {useEffect, useState} from "react";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok){
                    throw new Error("Failed to fetch users");
                }
                const data = await res.json();
                console.log(data);
                // setError('error msg here');
                setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    },[]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )



    return(
        <>
        {loading && <><h1>Loading...</h1></>}
        {error && <>{error}</>}

        {!loading && !error && (
            <>
                <h1>Users List</h1>


                <input 
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* { users.map(user => (
                    
                    <div key={user.id} className="user">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>
                )) } */}
                {filteredUsers.map(user => (
                   <div key={user.id} className="user">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div> 
                ))}
                
            </>
        )}
        
        </>
    )
}

export default UserList;