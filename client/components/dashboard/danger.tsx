import { MdWarning } from "react-icons/md";
import { getDangerZonePatients } from "@/lib/data/patient-data";
import { Patient } from "@/lib/data/patient-data";
import styles from "./danger.module.css";

export default async function Danger() {
    const patients = await getDangerZonePatients();
    return <div className={styles.dangerContainer}>
        <h1 className={styles.dangerHeader}>
            <MdWarning size={42} className={styles.icon} />
            Danger Zone
        </h1>
        <div className={styles.patientContainer}>
            {patients.map((patient: Patient) => {
                return <div key={patient._id} className={styles.patient}>
                    <div className={styles.details}>
                        <h2 style={{
                            color: "white"
                        }}>{patient.name}</h2>
                        <p style={{
                            color: "white"
                        }}>{patient.age} {patient.age <= 1 ? "year" : "years"} old</p>      
                    </div>
                </div>
            })}
        </div>
    </div>
}