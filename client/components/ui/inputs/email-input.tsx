import "./inputs.css"
export default function EmailInput({name, max, placeholder, label }: {
    name: string;
    max: number;
    placeholder?: string;
    label?: string;
}): React.ReactNode {
    return <div className="inputContainer">
        {label ? <label htmlFor={name}>{label}</label> : ""}
        <input maxLength = {max} id={name} type="email" name={name} placeholder={placeholder ? placeholder : ""} required={true} />
    </div>
}