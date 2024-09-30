"use client"
import TextInput from "@/components/ui/inputs/text-input";
import styles from "./login-form.module.css";
import { useFormState } from "react-dom";
import {login} from "@/lib/auth/actions";
import CredentialInput from "@/components/ui/inputs/credential-input";
import LoginButton from "@/components/login/login-button";
export default function LoginForm() {
    const [currentResponse, formAction] = useFormState(login, {message: null})
    return <form action={formAction} className={styles.formContainer}>
        <div className={styles.form}>
            <h1>Log In</h1>
            <TextInput name={"login_username"} max={20} label={"Username"}/>
            <CredentialInput name={"login_password"} max={60} label={"Password"}/>
            <LoginButton />
            {currentResponse ? currentResponse.error ? <p className={styles.loginFail}>{currentResponse.error}</p>: null : null}
        </div>
    </form>

}