import clsx from "clsx";
import styles from "./styles.module.css";
import { Form, Link } from "react-router-dom";

function Header({ username, className }){
    const headerClassNames = clsx(className, styles.container);
    return (
        <header className={headerClassNames}>
            <div className={styles.message}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M0 4.32C0 1.93413 1.93413 0 4.32 0H31.68C34.0659 0 36 1.93413 36 4.32V31.68C36 34.0659 34.0659 36 31.68 36H4.32C1.93413 36 0 34.0659 0 31.68V4.32Z" fill="#6D28D9"/>
                <path d="M23.36 6.72C23.36 5.48288 24.3629 4.48 25.6 4.48H29.44C30.6771 4.48 31.68 5.48288 31.68 6.72V29.28C31.68 30.5171 30.6771 31.52 29.44 31.52H25.6C24.3629 31.52 23.36 30.5171 23.36 29.28V6.72Z" fill="white"/>
                <path d="M4.48 6.72C4.48 5.48288 5.48288 4.48 6.72 4.48H10.56C11.7971 4.48 12.8 5.48288 12.8 6.72V18.08C12.8 19.3171 11.7971 20.32 10.56 20.32H6.72C5.48288 20.32 4.48 19.3171 4.48 18.08V6.72Z" fill="white"/>
                <path d="M13.92 6.72C13.92 5.48288 14.9229 4.48 16.16 4.48H20C21.2371 4.48 22.24 5.48288 22.24 6.72V23.68C22.24 24.9171 21.2371 25.92 20 25.92H16.16C14.9229 25.92 13.92 24.9171 13.92 23.68V6.72Z" fill="white"/>
            </svg>
                <span>Boardable</span>
                
            </div>
            <div className={styles.content_user}>
                <Link to="/account" className={styles.button_account}>My Account</Link>
                <Form method="POST" action="/logout">
                    <button className={styles.button}>Logout</button>
                </Form>
            </div>
            
        </header>
    );
}

export default Header;