import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Nav>
      <Link to='/route1'>List 1</Link>
      <Link to='/route2'>List 2</Link>
      <Link to='/route3'>List 3</Link>
      <Link to='/route4'>List 4</Link>
    </Nav>
  )
}

const Nav = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
`
