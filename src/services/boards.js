import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { URL_BASE, tokenKey } from "../constants";

export async function createBoard(boardData){
    const url = `${URL_BASE}/board`;
    const token = authProvider.token;
    //const token = window.localStorage.getItem(tokenKey);

    const options = {
        method: "POST",
        body: JSON.stringify(boardData),
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
    };

    const response = await fetch(url, options);

    if(response.ok){
        const body = await response.json();
        return body.data;
    }

    if(response.status === 401){
        authProvider.logout();
        throw redirect("/login");
    }

    const body = await response.json();
    return Promise.reject(new Error(body.error));
}

export async function getBoards(sortData){
    const token = authProvider.token;
    const url = `${URL_BASE}/board/getBoards`;
    const options = {
        method: "POST",
    body: JSON.stringify(sortData),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
            
        },
    };
    
    const response = await fetch(url, options);

    if (response.ok) {
        const body = await response.json();
        return body.data;
    }
    
    if (response.status === 401) {
        authProvider.logout();
        throw redirect("/login");
    }
    
    const body = await response.json();
    return Promise.reject(new Error(body.error));
}