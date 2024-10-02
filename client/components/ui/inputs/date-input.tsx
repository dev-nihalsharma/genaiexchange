import "./inputs.css"
export default function DateInput({name, placeholder, label }: {
    name: string;
    placeholder?: string;
    label?: string;
}): React.ReactNode {
    return <div className="inputContainer">
        {label ? <label htmlFor={name}>{label}</label> : ""}
        <input id={name} type="date" name={name} placeholder={placeholder ? placeholder : ""} required={true} />
    </div>
}