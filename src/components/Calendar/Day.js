import styled, { css } from 'styled-components'
import moment from 'moment'

const Day = ({ currentDate, date, onClick, selectedDate }) => {
  return (
    <StyledDay onClick={() => onClick(date)} currentDate={date} disabled={!date.isSame(currentDate, 'month')}>
      <Text
        active={moment().isSame(date, 'day')}
        muted={!date.isSame(currentDate, 'month')}
        selected={selectedDate !== null && date.isSame(selectedDate, 'day')}
      >
        {date.date()}
      </Text>
    </StyledDay>
  )
}

const StyledDay = styled.button`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  padding: 11px 0;
  line-height: 34px;
  position: relative;
  font-size: 16px;
  outline: none;
  user-select: none;
  height: 36px;

  background: transparent;
  border: none;

  &:disabled {
    cursor: default;
    opacity: 0;
  }
`

const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  outline: none;
  user-select: none;

  ${({ active }) =>
    active &&
    css`
      color: #3897ff;
    `};

  ${({ muted }) =>
    muted &&
    css`
      display: none;
    `};

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      height: 40px;
      width: 40px;
      background-color: #3897ff;
      border-radius: 50%;
      position: absolute;
      top: -2px;
      left: -2px;

      display: flex;
      align-items: center;
      justify-content: center;
    `};
`

export default Day
