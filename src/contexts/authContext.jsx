import * as React from "react";
import { URL_BASE, tokenKey } from "../constants";

const authContext = React.createContext({
    token: null,
    login: () => {},
    logout: () => {},
  });
  
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const [token, setToken] = React.useState(null);

    /*React.useEffect(() => {
        const savedToken = window.localStorage.getItem(tokenKey);
    
        if (savedToken) {
          setIsAuthenticated(true);
        }
    }, []);*/

    async function login(username, password) {
        const options = {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(URL_BASE + "/users", options);

        if(!response.ok) throw new Error(response.statusText);

        setIsAuthenticated(true);

    }

    return (
        <authContext.Provider value={{ isAuthenticated, login }}>
          {children}
        </authContext.Provider>
    );
}