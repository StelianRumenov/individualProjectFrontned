import React, { useRef } from "react";
import { registerHandler } from "../stores/UserStore";

export default function RegisterPage() {
 
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const validate = (email: string, password: string) => {
        //if no passwrod, send toast notification
        //if no email, send toast notification
    }

    const handleSubmit = () => {
        console.log(emailRef.current?.value, passwordRef.current?.value)
        var user = {
            email: emailRef.current?.value,
            name: nameRef.current?.value,
            password: passwordRef.current?.value
        }
        console.log(user)

        registerHandler(user)
    }

    return (<div>
        <input ref={emailRef} type="text" name="email"></input>
        <input ref={passwordRef} type="password" name="password"></input>
        <input ref={nameRef} type="text" name="name"></input>
        <button onClick={() => handleSubmit()}>Register</button>
    </div>)
}