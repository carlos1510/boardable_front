import { Outlet, redirect, useActionData, useLoaderData } from "react-router-dom";
import { authProvider } from "../../auth";
import styles from "./styles.module.css";
import Header from "../../components/Header/Heade";
import { createBoard, getBoards } from "../../services/boards"; 
import { getUser } from "../../services/users";

export async function loader({ request }) {
    if(!authProvider.isAuthenticated){
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    const [boards] = await Promise.all([getBoards({sort: "create_at"})]);
    //console.log(boards);

    //const [id, username, password, email] = await Promise.all([getUser()]);
    const username = "carlos";
    //const username="carlos";
    //console.log("datos del usuario: ",id, username, password, email);

    return {username, boards};
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
    const {username, boards}  = useLoaderData();
    const actionData = useActionData();

    function handleChange(event){

    }
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