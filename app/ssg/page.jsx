import UserList_SSG from "../components/UserList_Common";
import {Typography} from "@mui/material";

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    return res.json();

}

export default async function Page() {
    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <Typography variant="h4">SSG</Typography>
            <UserList_SSG users={users} />
        </div>
    )
    
}