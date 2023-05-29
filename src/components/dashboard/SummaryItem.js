'use client'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

export default function SummaryItem({ data }) {
  return (
    <div className="card shadow-xl bg-base-100">
      <div className="card-body">
        <div className="card-title text-md font-normal">{data.datasets[0].label}</div>
        <div className="flex items-center gap-4 h-20">
          <p className="text-4xl font-bold">{Math.round(Math.random() * 2000)}</p>
          <Doughnut
            data={data}
          />
        </div>
      </div>
    </div>
  )
}
