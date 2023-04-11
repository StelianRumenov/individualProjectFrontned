import axios from "axios";

export type UserType = {
    id?: string,
    email?: string,
    password?: string,
    name?: string
}

export function loginHandler(email: string, password: string) { 
    const config = {
        method: 'post',
        url: "http://localhost:3002/auth/login",
        headers: {
            Authorization: "Bearer",
            contentType: "application/json"
        },
        data: {
            email, password
        }
    }

    return axios(config).then((response) => console.log(response)).catch(()=> {
        console.error();
        
    })
}

export function registerHandler(user: UserType) { 
    const config = {
        method: 'post',
        url: "http://localhost:3002/auth/register",
        headers: {
            Authorization: "Bearer",
            contentType: "application/json"
        },
        data: {
            user
        }
    }

    return axios(config).then((response) => console.log(response)).catch(()=> {
        console.error();
        
    })
}