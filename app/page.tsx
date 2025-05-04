
import Link from "next/link";
import {Typography} from "@mui/material";
// import UserList from "./components/UserList";

export default function Home() {
  return (

    <main style={{ padding: 20 }}>
      <Typography variant="h5" style={{fontWeight:"bold"}}>Next js Fetch Rendering Methods</Typography>
      <hr />
      <br />
      <ul>
        <li>
          <Link style={{ color: "blue"}} href="/user-list" >
            <Typography sx={{ "&:hover": { fontWeight:"bold"} }}>
              User List Fetch Render - By default (SSG only)
            </Typography>
          </Link>
        </li>
        <li>
          <Link style={{ color: "blue"}} href="/ssg">
            <Typography sx={{ "&:hover": { fontWeight:"bold"} }}>
            User List Fetch Render - Static Site Generation (SSG)
            </Typography>
          </Link>
        </li>
        <li>
          <Link style={{ color: "blue"}}  href="/isr">User List Fetch Render - Incremental Static Regeneration (ISR)</Link>
        </li>
        <li>
          <Link style={{ color: "blue"}}  href="/ssr">User List Fetch Render - Server Side Rendering (SSR)</Link>
        </li>
      </ul>
    </main>
  );
}
