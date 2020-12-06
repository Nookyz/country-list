import styled from 'styled-components'
import moment from 'moment'

import Day from './Day'

const Days = ({ date, onClick, selectedDate }) => {
  const thisDate = moment(date)
  const daysInMonth = moment(date).daysInMonth()
  const firstDayDate = moment(date).startOf('month')
  const previousMonth = moment(date).subtract(1, 'month')
  const previousMonthDays = previousMonth.daysInMonth()
  const nextsMonth = moment(date).add(1, 'month')
  let days = []
  let labels = []

  for (let i = 1; i <= 7; i++) {
    thisDate.date(i)
    labels.push(
      <WeekDay key={moment(thisDate).format('DD MM YYYY')}>
        <Text>{moment().day(i).format('ddd').slice(0, 1)}</Text>
      </WeekDay>
    )
  }

  const firstDayDateCorrected = firstDayDate.day() === 0 ? 7 : firstDayDate.day()

  for (let i = firstDayDateCorrected; i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2)

    days.push(
      <Day
        key={moment(previousMonth).format('DD MM YYYY')}
        onClick={date => onClick(date)}
        currentDate={date}
        date={moment(previousMonth)}
        selectedDate={selectedDate}
      />
    )
  }

  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i)

    days.push(
      <Day
        key={moment(thisDate).format('DD MM YYYY')}
        onClick={date => onClick(date)}
        currentDate={date}
        date={moment(thisDate)}
        selectedDate={selectedDate}
      />
    )
  }

  const daysCount = days.length
  for (let i = 1; i <= 35 - daysCount; i++) {
    nextsMonth.date(i)

    days.push(
      <Day
        key={moment(nextsMonth).format('DD MM YYYY')}
        onClick={date => onClick(date)}
        currentDate={date}
        date={moment(nextsMonth)}
        selectedDate={selectedDate}
      />
    )
  }

  return (
    <Wrapper>
      <WeekDays>{labels.concat()}</WeekDays>
      <WrapDays>{days.concat()}</WrapDays>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  margin: 0 auto;
`

const WeekDays = styled.div`
  /* display: flex;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin-top: 24px;
  margin-bottom: 12px;
`
const WeekDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  user-select: none;

  margin: 0 auto;

  width: 16px;
  height: 16px;
`

const WrapDays = styled.div`
  /* padding: 0 14px; */
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #909599;

  width: 100%;
`

export default Days
