import React from "react";
import { useForm, Resolver } from "react-hook-form";
import classes from './authPage.module.scss'

interface formValues {
    email: string,
    password: string
}

const resolver: Resolver<formValues> = async (values) => {
    return {
        values: (!values.email || !values.password) ? {} : values,
        errors: (!values.email || !values.password)
            ? {
                email: {
                    type: 'required',
                    message: "Email is required."
                },
                password: {
                    type: 'required',
                    message: "Password is required."
                }
            }
            : {}
    };
};

const AuthPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: resolver
    });

    const onSubmit = handleSubmit((data) => {
        return alert(JSON.stringify(data))
    })

    return (
        <div className={classes.main}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input {...register("email")} placeholder="Email" />
                    {errors?.email && <p className={classes.warning}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password")} placeholder="Password" />
                    {errors?.password && <p className={classes.warning}>{errors.password.message}</p>}
                </div>
                <input type="submit" />
            </form>

        </div>
    )
}

export default AuthPage;