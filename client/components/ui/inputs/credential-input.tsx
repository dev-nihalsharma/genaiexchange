"use client"
import "./inputs.css"
import styles from "./credential-input.module.css";
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import {useState} from "react";
export default function CredentialInput({name, max, placeholder, label }: {
    name: string;
    max: number;
    placeholder?: string;
    label?: string;
}): React.ReactNode {
    const [state,toggleState] = useState(false)

    return <div className="inputContainer">
        {label ? <label htmlFor={name}>{label}</label> : ""}
        <div className={styles.passwordField}>
            <input maxLength={max} id={name} type={state ? "text" : "password"} name={name} placeholder={placeholder ? placeholder : ""}
                   required={true}/>
            <div className={styles.passwordCont} onClick={() => {toggleState((v: boolean) => !v)}}>
                {state ? <IoMdEye size={22}/> : <IoMdEyeOff size={22}/>}
            </div>
        </div>

    </div>
}