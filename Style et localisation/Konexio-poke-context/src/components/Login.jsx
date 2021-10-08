import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className="container mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username" className="form-label">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Your username..."
                {...register("username", { required: "Please enter your username", maxLength: 15 })}
            />
      
            <li className="text-danger list-unstyled">{errors.username?.message /* && errors.username.message*/ }</li>
    
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Your password..."
                {...register("password", { required: "Please enter your password", minLength: 6 })}
            />
            <li className="text-danger list-unstyled">{errors.password?.message /* && errors.password.message*/ }</li>
            <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
    )
}
