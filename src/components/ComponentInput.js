import { useState } from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import MaskedInput from "react-text-mask";

import Input from './InputMask'

const CompInput = () => {
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)

  const handleOnChange = (e) => setValue(e.target.value)

  const checkDays = value => {
    if (value[0] === "3") {
      return /[0-1]/;
    } else {
      return /[0-9]/;
    }
  };

  const checkMonth = value => {
    if (value[5] === "1") {
      return /[0-2]/;
    } else {
      return /[0-9]/;
    }
  };
  return (
    <Wrapper>
      <Header />
      {/* <Input type='text' value={value} onChange={handleOnChange}>
        <InputMask mask="DD/MM/YYYY" maskChar="9" />
      </Input> */}
      <MyInput
        value={value}
        onChange={handleOnChange}
        mask={[
          /[0-3]/,
          checkDays(value),
          "/",
          /[0-1]/,
          checkMonth(value),
          "/",
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
        ]}
        placeholder="DD / MM / YYYY"
        placeholderChar=" "
        guide={true}
      />
      <CustomInput
        type="date"
      />

      <Input 
        mask={[
          /[0-3]/,
          checkDays(inputValue),
          "\u2009/\u2009",
          /[0-1]/,
          checkMonth(inputValue),
          "\u2009/\u2009",
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
          /[0-9]/,
        ]}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="DD / MM / YYYY"
        maskedChar="/"
      />

      {/* <InputMask mask="DD/MM/YYYY" value={value} onChange={handleOnChange}>
        {(inputProps) => <Input {...inputProps} type="text" />}
      </InputMask> */}
    </Wrapper>
  )
}

export default CompInput

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17);
  background-color: #ffffff;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

const MyInput = styled(MaskedInput)`
  outline: none;
  border: none;
  margin-bottom: 20px;
`

const CustomInput = styled.input`
  outline: none;
  border: none;
  margin-bottom: 20px;
`
