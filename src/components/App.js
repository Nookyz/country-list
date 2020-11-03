import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Flags from './Flags'
import Flags2 from './Flags2'
import Flags3 from './Flags3'
import Flags4 from './Flags4'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    max-width: 768px;
    margin: 0px auto;
  }
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/route1' component={Flags} />
          <Route path='/route2' component={Flags2} />
          <Route path='/route3' component={Flags3} />
          <Route path='/route4' component={Flags4} />
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

const Container = styled.div``

export default App
