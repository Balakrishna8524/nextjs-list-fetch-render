"use client";

import React, {useEffect, useState} from "react";
import {
    Container,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Alert,
} from "@mui/material";

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
                // console.log(data);
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
        <Container maxWidth="md" style={{ marginTop: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                Users List
            </Typography>

            <TextField
                fullWidth
                label="Search users..."
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                margin="normal"
            />

            {loading && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <CircularProgress />
                </div>
            )}

            {error && (
                <Alert severity="error" style={{ marginTop: "1rem" }}>
                {error}
                </Alert>
            )}

            {!loading && !error && (
                <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Phone</strong></TableCell>
                            <TableCell><strong>Website</strong></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.website}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            </Container>
    )
}

export default UserList;