import styles from "./line-chart.module.css";
import {MdStackedLineChart} from "react-icons/md";
import {getRecentData, RecentData} from "@/lib/data/patient-data";
import LineGraph from "@/components/charts/line-graph";
export default async function LineChart() {

    const data: RecentData = await getRecentData()

    return <div className={styles.lineChartContainer}>
        <h1 className={styles.lineChartHeader}>
            <MdStackedLineChart size={42} className={styles.icon} />
            Daily Cases
        </h1>
        <div className={styles.chartContainer}>
            <LineGraph data={data} />
        </div>
    </div>
}