import UserList_ISR from "../components/UserList_Common";
import {Typography} from "@mui/material";

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: {revalidate:10} }); // ISR: revalidate after 10 seconds

    return res.json();
}


export default async function Page() {
    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <Typography variant="h4">ISR</Typography>
            <UserList_ISR users={users} />
        </div>
    )
}