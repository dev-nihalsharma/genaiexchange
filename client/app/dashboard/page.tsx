import {validateRequest} from "@/lib/lucia";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import styles from "./page.module.css"
import Danger from "@/components/dashboard/danger";
import CategoryChart from "@/components/dashboard/category-chart";
import LineChart from "@/components/dashboard/line-chart";

export default async function Dashboard() {
    return <main className={styles.main}>
        <div className={styles.containerOne}>
            <Danger />
        </div>
        <div className={styles.containerTwo}>
            <CategoryChart />
            <LineChart />
        </div>
    </main>
}