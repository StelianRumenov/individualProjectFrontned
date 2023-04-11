import React, { useRef } from "react";
import { loginHandler } from "../stores/UserStore";

export default function LoginPage() {
 
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const validate = (email: string, password: string) => {
        //if no passwrod, send toast notification
        //if no email, send toast notification
    }

    const handleSubmit = () => {
        console.log(emailRef.current?.value, passwordRef.current?.value)
        var body = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }
        console.log(body.email, body.password)

        loginHandler(body.email as string,  body.password as string)
    }

    return (<div>
        <input ref={emailRef} type="text" name="email"></input>
        <input ref={passwordRef} type="password" name="password"></input>
        <button onClick={() => handleSubmit()}>Login</button>
    </div>)
}