import { Outlet, redirect, useActionData, useLoaderData } from "react-router-dom";
import { authProvider } from "../../auth";
import styles from "./styles.module.css";
import Header from "../../components/Header/Heade";
import { createBoard } from "../../services/boards"; 
import { getUser } from "../../services/users";

export async function loader({ request }) {
    if(!authProvider.isAuthenticated){
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    //const [id, username, password, email] = await Promise.all([getUser()]);
    const username = "carlos";
    //const username="carlos";
    //console.log("datos del usuario: ",id, username, password, email);

    return {username};
}

export async function action({ request }){
    let formData = await request.formData();
    const boardData = Object.fromEntries(formData.entries());
    try{
        await createBoard(boardData);
        return redirect("/");
    }catch(error){
        return { error: error.message };
    }
}

function App() {
    const {username}  = useLoaderData();
    console.log("username: ", username);
    const actionData = useActionData();
    //const { username } = useLoaderData();
    return (
        <div className={styles.container} >
            <Header username={username} className={styles.header} />
            <main>
                <Outlet context={actionData?.error} />
            </main>
        </div>
    );
}

export default App;