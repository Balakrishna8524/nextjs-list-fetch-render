import UserList_SSR from "../components/UserList_Common";
import {Typography} from "@mui/material";

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store"});

    return res.json();

}

export default async function Page() {
    const users = await getUsers();
    // console.log(users);

    return (
        <div>
            <Typography variant="h4">SSR</Typography>
            <UserList_SSR users={users} />
        </div>
    )
    
}