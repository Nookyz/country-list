import styled from 'styled-components'
import { countryList } from '../country-list'

function Flags() {
  return (
    <Wrapper>
      {countryList.map(item => (
        <Text key={`${item.code} ${item.iso}`}>{item.country}</Text>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Text = styled.div`
  font-size: 20px;
  padding: 15px 20px;
`
export default Flags
