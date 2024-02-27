import { Outlet, redirect, useActionData } from "react-router-dom";
import { authProvider } from "../../auth";
import styles from "./styles.module.css";
import Header from "../../components/Header/Heade";

export async function loader({ request }) {
    if(!authProvider.isAuthenticated){
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    return null;
}

function App() {
    const username  = "carlos";
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