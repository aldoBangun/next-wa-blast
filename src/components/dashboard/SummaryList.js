import SummaryItem from './SummaryItem'

const datas = [
  {
    id: 1,
    labels: ['Failed', 'In Progress', 'Success'],
    datasets: [
      {
        label: 'Outbox',
        data: [7, 18, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    id: 2,
    labels: ['Negative', 'Neutral', 'Positive'],
    datasets: [
      {
        label: 'Inbox',
        data: [10, 53, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
]

export default function SummaryList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {datas.map((data) => (
        <SummaryItem key={data.id} data={data} />
      ))}
    </div>
  )
}
