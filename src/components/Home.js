import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/route1'>List 1</Link>
      <Link to='/route2'>List 2</Link>
    </div>
  )
}
