import styled, { createGlobalStyle } from 'styled-components'
// import Truncate from 'react-truncate'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './Home'
// import Flags from './Flags'
// import Flags2 from './Flags2'
// import Flags3 from './Flags3'
// import Flags4 from './Flags4'
import DatePicker from './Calendar/Calendar'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
    max-width: 768px;
    margin: 0px auto;
  }
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <DatePicker />
    </Container>
  )
}

const Container = styled.div``

export default App
