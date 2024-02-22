import { redirect } from "react-router-dom";
import { authProvider } from "../../auth";

export async function loader({ request }) {
    if(!authProvider.isAuthenticated){
        let params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }

    return null;
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default App;