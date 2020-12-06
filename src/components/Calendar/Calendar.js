import styled from 'styled-components'
import moment from 'moment'
import { useState } from 'react'

// import Heading from './Heading'
import Days from './Days'

const Calendar = () => {
  const [date, setDate] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(null)

  const [rerender, setRerender] = useState(false)

  const resetDate = () => setDate(moment())

  const changeMonth = month => {
    let temp = date
    temp.month(month)

    setDate(temp)
    setRerender(!rerender)
  }

  const selectDate = date => {
    let tempSelectedDate = selectedDate

    if (selectedDate === null) {
      tempSelectedDate = moment(date)
    } else if (date.isBefore(selectedDate, 'day') || date.isAfter(selectedDate, 'day')) {
      tempSelectedDate = moment(date)
    } else if (selectedDate.isSame(selectedDate, 'day')) {
      tempSelectedDate = null
    }

    setSelectedDate(tempSelectedDate)

    setRerender(!rerender)
  }

  return (
    <Wrapper>
      <Header>Select Delivery Date</Header>

      <Container>
        <MyCalendar>
          <Heading>
            <IconWrap onClick={() => changeMonth(date.month() - 1)}>&#8249;</IconWrap>
            <Text onClick={resetDate}>{`${date.format('MMMM')} ${date.format('YYYY')}`}</Text>
            <IconWrap onClick={() => changeMonth(date.month() + 1)}>&#8250;</IconWrap>
          </Heading>

          <Days onClick={date => selectDate(date)} date={date} selectedDate={selectedDate} />
        </MyCalendar>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Header = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17);
  background-color: #ffffff;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;
`

const MyCalendar = styled.div`
  margin-top: 26px;

  background-color: #ffffff;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  user-select: none;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  user-select: none;
`

const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default Calendar
