import { MdPieChart } from "react-icons/md";
import styles from "./category-chart.module.css";
import Loader from "@/components/ui/loader/loader";
import {CategoryData, getCategoryData} from "@/lib/data/patient-data";
import {DoughnutChart} from "@/components/charts/doughnut-chart";

export default async function CategoryChart() {
    const data: CategoryData = await getCategoryData()
    return <div className={styles.categoryContainer}>
        <h1 className={styles.categoryHeader}>
            <MdPieChart size={42} className={styles.icon} />
            Category distribution
        </h1>
        <div className={styles.chartContainer}>
            {data.length === 0 ? <Loader>
                Loading data...
            </Loader> : <DoughnutChart data={data}/>}
        </div>
    </div>
}