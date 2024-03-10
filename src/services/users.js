import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { URL_BASE, tokenKey } from "../constants";

export async function getUser(){
    const token = authProvider.token;

    const url = `${URL_BASE}/user`;
    const options = {
        headers: {
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

export async function editUser(id, updateData){
    //const url = `${URL_BASE}/user/${id}`;
    const url = `${URL_BASE}/user`;

    const token = window.localStorage.getItem(tokenKey);

    const options = {
        method: "PATCH",
        body: JSON.stringify(updateData),
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
        },
    };

    const response = await fetch(url, options);

    if(response.ok) {
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

export async function deleteUser(id){
    const url = `${URL_BASE}/user/${id}`;
    const token = window.localStorage.getItem(tokenKey);

    const options = {
        method: "DELETE",
        headers: {
        Authorization: `bearer ${token}`,
        },
    };

    const response = await fetch(url, options);

    if (response.ok) {
        authProvider.logout();
        throw redirect("/login");
    }

    if (response.status === 401) {
        authProvider.logout();
        throw redirect("/login");
    }
    
    const body = await response.json();
    return Promise.reject(new Error(body.error));
}