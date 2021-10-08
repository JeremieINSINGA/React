import React from 'react'
import { useForm } from "react-hook-form";


export default function Login() {
    const {registrer, handleSubmit, formState: {errors}} = useForm();
    return (
        <>
        <form>
            <label htmlFor="Home">Bienvenue sur la page Podedex:</label>
            <input {...registrer("email")} id="email" />

            <label htmlFor="Login">Entrez vos identifiants:</label>
            <input {...registrer("Login")} id="Login" />

            <button type="submit">Login</button>
        </form>
    
        
        <div>
            <h1>LOGIN</h1>
        </div>
        </>
    )
}
