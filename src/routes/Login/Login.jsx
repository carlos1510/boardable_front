import styles from "./styles.module.css";

import arrowRightUrl from "../../assets/arrow-right.svg";

import { authProvider } from "../../auth";

import {
    Form,
    NavLink,
    redirect,
    useActionData,
    useLocation,
    useNavigation,

  } from "react-router-dom";

export async function action({ request }) {
    let formData = await request.formData();
    let username = formData.get("username");
    let password = formData.get("password");

    try{
        await authProvider.login(username, password);
    }catch(error){
        return {
            error: "Invalid login attempt",
        };
    }

    let redirectTo = formData.get("redirectTo");
    return redirect(redirectTo || "/");
}

function Login() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirectTo = searchParams.get("from");

    const isSubmitting = navigation.state === "submitting";

    return (
        <div className={styles.container}>
            <div className={styles.content_login}>
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <path d="M0 11.52C0 5.15768 5.15768 0 11.52 0H84.48C90.8423 0 96 5.15768 96 11.52V84.48C96 90.8423 90.8423 96 84.48 96H11.52C5.15768 96 0 90.8423 0 84.48V11.52Z" fill="#6D28D9"/>
                    <path d="M62.2933 17.92C62.2933 14.621 64.9677 11.9467 68.2667 11.9467H78.5067C81.8056 11.9467 84.48 14.621 84.48 17.92V78.08C84.48 81.379 81.8056 84.0533 78.5067 84.0533H68.2667C64.9677 84.0533 62.2933 81.379 62.2933 78.08V17.92Z" fill="white"/>
                    <path d="M11.9467 17.92C11.9467 14.621 14.621 11.9467 17.92 11.9467H28.16C31.459 11.9467 34.1333 14.621 34.1333 17.92V48.2133C34.1333 51.5123 31.459 54.1867 28.16 54.1867H17.92C14.621 54.1867 11.9467 51.5123 11.9467 48.2133V17.92Z" fill="white"/>
                    <path d="M37.12 17.92C37.12 14.621 39.7944 11.9467 43.0933 11.9467H53.3333C56.6323 11.9467 59.3067 14.621 59.3067 17.92V63.1467C59.3067 66.4456 56.6323 69.12 53.3333 69.12H43.0933C39.7944 69.12 37.12 66.4456 37.12 63.1467V17.92Z" fill="white"/>
                </svg>
                <h1 className={styles.text_title_login}>Welcome to Boardable</h1>
                <Form className={styles.form} method="POST">
                    {redirectTo && (
                        <input type="hidden" name="redirectTo" value={redirectTo} />
                    )}
                    <div >
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="Username"
                            name="username"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div >
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input id="password" 
                            type="password"
                            name="password"
                            required 
                            className={styles.input}
                        />
                    </div>
                    <button type="submit" className={styles.button} >
                        Login
                    </button>
                    {actionData?.error && (
                      <p className={styles.error}>{actionData.error}</p>
                    )}
                </Form>
                <div className={styles.link_content}>
                    <NavLink to="/signup" className={styles["link"]}> 
                        Create as account 
                        <img src={arrowRightUrl} alt="" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login