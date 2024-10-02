import Patient from "@/components/patients/patient";
import styles from "./patient-list.module.css";
import {getPatients} from "@/lib/data/patient-data";
export default async function PatientList() {
    const data = await getPatients()

    return <div className={styles.list}>
        {data.map((patient, index) => <Patient key={index} name={patient.name} age={patient.age} category={patient.category} />)}
    </div>
}