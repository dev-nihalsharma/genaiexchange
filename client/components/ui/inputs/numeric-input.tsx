"use client"
import "./inputs.css"
export default function NumericInput({name, max, min, placeholder, label }: {
    name: string;
    max: number;
    min: number;
    placeholder?: string;
    label?: string;
}): React.ReactNode {
    return <div className="inputContainer">
        {label ? <label htmlFor={name}>{label}</label> : ""}
        <input max = {max} id={name} type="number" name={name} placeholder={placeholder ? placeholder : ""} required={true} />
    </div>
}