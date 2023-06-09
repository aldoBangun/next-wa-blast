'use client'
import { useEffect, useState } from 'react'
import { Card, Button } from 'react-daisyui'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [totalDaysInCurrentMonth, setTotalDaysInCurrentMonth] = useState(0)
  const [firstDayInCurrentMonth, setFirstDayInCurrentMonth] = useState(0)
  const [totalDaysInPrevMonth, setTotalDaysInPrevMonth] = useState(0)
  const [adjacentMonthDaysLength, setAdjacentMonthDaysLength] = useState([0, 0])
  const [dateList, setDateList] = useState([])
  const [cellLength, setCellLength] = useState(0)

  const handlePrevMonth = () => {
    if (month < 1) {
      setMonth(11)
      setYear((prev) => prev - 1)
    } else {
      setMonth((prev) => prev - 1)
    }
  }

  const handleNextMonth = () => {
    if (month > 10) {
      setMonth(0)
      setYear((prev) => prev + 1)
    } else {
      setMonth((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setTotalDaysInCurrentMonth(getTotalDaysInMonth(year, month))
    setFirstDayInCurrentMonth(getFirstDayInCurrentMonth(year, month))
    setTotalDaysInPrevMonth(getTotalDaysInMonth(year, month - 1))

    if (totalDaysInCurrentMonth + firstDayInCurrentMonth === 28) {
      setCellLength(28)
    } else if (totalDaysInCurrentMonth + firstDayInCurrentMonth <= 35) {
      setCellLength(35)
    } else {
      setCellLength(42)
    }

    setAdjacentMonthDaysLength(getAdjacentMonthDaysLength(totalDaysInCurrentMonth, firstDayInCurrentMonth, cellLength))
  }, [year, month, totalDaysInCurrentMonth, firstDayInCurrentMonth, cellLength])

  useEffect(() => {
    setDateList([
      ...createDateList(totalDaysInPrevMonth - (adjacentMonthDaysLength[0] - 1), totalDaysInPrevMonth, month),
      ...createDateList(1, totalDaysInCurrentMonth, month + 1),
      ...createDateList(1, adjacentMonthDaysLength[1], 'next', month + 2)
    ])
  }, [month, totalDaysInPrevMonth, totalDaysInCurrentMonth, adjacentMonthDaysLength])

  return (
    <div className="flex gap-4">
      <Card>
        <Card.Body>
          <div className="flex items-center justify-between">
            <Button color="ghost" onClick={handlePrevMonth}>
              <ChevronLeft />
            </Button>
            <div className="flex items-center justify-center gap-2">
              <div>{monthNames[month]}</div>
              <div>{year}</div>
            </div>
            <Button color="ghost" onClick={handleNextMonth}>
              <ChevronRight />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {dayNames.map((day) => (
              <Button
                key={day}
                color="ghost"
                shape="square"
                className="font-light"
              >
                {day}
              </Button>
            ))}
            {dateList.map((item) => (
              <Button
                key={item.id}
                color={selectedDate === item.id ? 'primary' : 'ghost'}
                shape="square"
                className={`${item.current ? 'font-bold' : 'font-thin'}`}
                onClick={() => setSelectedDate(item.id)}
              >
                {item.date}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
      <div>
        <div>month: {month}</div>
        <div>year: {year}</div>
        <div>totalDaysInCurrentMonth: {totalDaysInCurrentMonth}</div>
        <div>firstDayInCurrentMonth: {firstDayInCurrentMonth}</div>
        <div>totalDaysInPrevMonth: {totalDaysInPrevMonth}</div>
        <div>adjacentMonthDaysLength: [{adjacentMonthDaysLength[0]}, {adjacentMonthDaysLength[1]}]</div>
      </div>
    </div>
  )
}

function getTotalDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayInCurrentMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

function createDateList(startDay, endDay, prefix = 'current') {
  let result = []

  for (let i = startDay; i <= endDay; i++) {
    result.push({
      id: `${prefix}-${i}`,
      current: prefix === 'current',
      date: i
    })
  }

  return result
}

function getAdjacentMonthDaysLength(totalDaysInCurrentMonth, firstDay, totalCellLength = 42) {
  const prevMonth = firstDay
  const nextMonth = totalCellLength - totalDaysInCurrentMonth - firstDay

  return [prevMonth, nextMonth]
}
