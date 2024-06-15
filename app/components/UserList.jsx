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
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
                <h1>Users List</h1>

                <input 
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "8px", marginBottom: "20px", width: "250px", border: "1px solid #ccc", borderRadius: "4px" }}
                />

                {/* { users.map(user => (
                    
                    <div key={user.id} className="user">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>
                )) } */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                
            </div>
        )}
        
        </>
    )
}

export default UserList;