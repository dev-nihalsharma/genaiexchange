"use client"
import styles from "./patient-form.module.css";
import TextInput from "@/components/ui/inputs/text-input";
import NumericInput from "@/components/ui/inputs/numeric-input";
import DateInput from "@/components/ui/inputs/date-input";
import SelectMenu from "@/components/ui/select-menus/select-menu";
import EmailInput from "@/components/ui/inputs/email-input";
import {useFormState} from "react-dom";
import {newPatient} from "@/lib/data/patient-data";
import PatientFormButton from "@/components/new/patient-form-button";
import ImageFile from "@/components/new/image-file";

export default function PatientForm() {
    const [currentResponse, formAction] = useFormState(newPatient, {message: null})

    return <form action={formAction} className={styles.form}>
        <div className={styles.inputsContainer}>
            <TextInput label={"Name"} name={"pt_name"} max={60}/>
            <NumericInput name={"pt_age"} max={110} min={0} label={"Age"}/>
        </div>
        <div className={styles.inputsContainer}>
            <DateInput label={"Date of Birth"} name={"pt_dob"}/>
            <SelectMenu options={[{
                value: "Male",
                label: "Male"
            }, {
                value: "Female",
                label: "Female"
            }]} name={"pt_gender"} label={"Sex"}/>
        </div>
        <div className={styles.inputsContainer}>
            <TextInput label={"Phone"} name={"pt_phone"} max={15}/>
            <EmailInput label={"Email"} name={"pt_email"} max={60}/>
        </div>
        <div className={styles.inputsContainer}>
            <SelectMenu options={[{
                value: "brain",
                label: "Brain"
            }, {
                value: "lung",
                label: "Lung"
            }, {
                value: "colon",
                label: "Colon"
            }, {
                value: "breast",
                label: "Breast"
            }]} name={"pt_region"} label={"Scan region"}/>
            <ImageFile />
        </div>
        <PatientFormButton/>

        {currentResponse ? currentResponse.error ? <p className={styles.failReason}>{currentResponse.error}</p>: null : null}

    </form>
}