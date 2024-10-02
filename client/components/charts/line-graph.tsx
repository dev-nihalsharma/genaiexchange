"use client"
import {RecentData} from "@/lib/data/patient-data";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LineGraph({ data }: {
    data: RecentData
}): React.ReactNode {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Counts',
                data: data.map(item => item.count),
                fill: false,
                borderColor: '#FF5733', // Change line color here

            },
        ],
    };

    const options:any = {
        scales: {
            x: {
                ticks: {
                    color: 'white', // Make labels white
                },
                grid: {
                    color: '#6c6c6c', // Make grid white
                },
            },
            y: {
                ticks: {
                    color: 'white', // Make labels white
                },
                grid: {
                    color: '#6c6c6c', // Make grid white
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
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
                text: 'Daily cases in the past 7 days',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};