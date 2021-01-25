import { useRef } from 'react';
import styled from 'styled-components'

const Li = ({ item, listRef }) => {
  // const listRef = useRef(null);
  return (
    <li
      key={item.id}
      style={{ height: '250px', border: '1px solid black', margin: '20px', background: '#b9e9e1' }}
      ref={listRef}
    >
      <div>{item.id}</div>
      <div>{item.firstname}</div>
      <div>{item.lastname}</div>
      <div>{item.year}</div>
    </li>
  );
}
export default Li;