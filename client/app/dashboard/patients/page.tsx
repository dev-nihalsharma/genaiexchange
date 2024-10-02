import styles from "./page.module.css";
import PatientList from "@/components/patients/patient-list";

export default function Page() {
    return <div className={styles.container}>
        <h1 className={styles.header}>All Patients</h1>
        <PatientList />
    </div>
}