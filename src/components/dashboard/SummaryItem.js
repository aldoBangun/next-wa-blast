'use client'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip
} from 'chart.js'

ChartJS.register(ArcElement, Legend, Tooltip)

export default function SummaryItem({ data }) {
  return (
    <div className="card shadow-xl bg-base-100">
      <div className="card-body">
        <div className="card-title">{data.datasets[0].label}</div>
        <Doughnut data={data} />
      </div>
    </div>
  )
}
