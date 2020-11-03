import { useState } from 'react'
import styled from 'styled-components'
import { countryList } from '../country-list'
import { search } from '../search'

function Flags4() {
  const [value, setValue] = useState('')
  const filteredCountry = search(countryList, value, ({ country }) => country)

  return (
    <Wrapper>
      <Header>
        <InputWrap>
          <Input onChange={e => setValue(e.target.value)} value={value} />
        </InputWrap>
      </Header>
      <CountryList>
        {filteredCountry.map(item => (
          <Text key={`${item.code} ${item.iso}`}>{item.country}</Text>
        ))}
      </CountryList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: blue;
`

const CountryList = styled.div`
  padding-top: 80px;
  height: 100%;
  overflow-y: auto;
  background: #222254;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.17);
  background-color: #ffffff;
  display: flex;
  align-items: center;
`

const Text = styled.div`
  font-size: 20px;
  padding: 15px 20px;
`

const InputWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 30px;
  outline: none;
  font-size: 16px;
`

export default Flags4
