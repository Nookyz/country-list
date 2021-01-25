import React, { useRef } from 'react';
import styled from 'styled-components'
import Li from './Li'

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
  {
    id: 'c',
    firstname: 'Pasha',
    lastname: 'Motrenko',
    year: 1997,
  },
  {
    id: 'd',
    firstname: 'Jhon',
    lastname: 'Wick',
    year: 1980,
  },
];

const List = () => {

  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
 
  const handleClick = id => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
    
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
            >
              Scroll Item {item.id} Into View
            </button>
          </li>
        ))}
      </ul>
  
      <ul>
        {list.map(item => (
          <li
            key={item.id}
            ref={refs[item.id]}
            style={{ height: '250px', border: '1px solid black' }}
          >
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>

      <ul>
        {list.map(item => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
            >
              Scroll Item {item.id} Into View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default List;