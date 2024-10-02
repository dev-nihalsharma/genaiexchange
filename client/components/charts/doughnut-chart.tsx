"use client"
import {Doughnut} from "react-chartjs-2";
import type { CategoryData } from "@/lib/data/patient-data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({data}: {
    data: CategoryData
}): React.ReactNode {
    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 5,
                    font: {
                        size: 14
                    },
                    boxWidth: 10,
                    boxHeight: 10,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0
                    }
                }
            },
            title: {
                display: true,
                text: 'Category wise Distribution',
            },
        },
    };

    const chartData = {
        labels: data.map(item => item.category),
        datasets: [
            {
                label: 'Count',
                data: data.map(item => item.count),
                backgroundColor: [
                    'rgba(255,222,143,0.6)',
                    'rgba(137,255,159,0.6)',
                    'rgba(255,132,156,0.6)',
                ],
                borderColor: [
                    'rgb(192,190,75)',
                    'rgb(54,235,105)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
                borderRadius: 50,
                cutout: "85%",
                spacing: 5,
                radius: "75+%",

            },
        ],
    };

    return (
        <Doughnut options={options} data={chartData} />
    );
};