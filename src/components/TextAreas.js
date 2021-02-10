import { useState } from 'react'
import styled from 'styled-components'

export default function TextArea() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const formatTextArea = (value) => value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  return (
    <>
    <Wrap>
      <Number>1</Number>
      <Textarea value={value1} onChange={(e) => setValue1(e.target.value)}/>
    </Wrap>
    <Wrap>
      <Number>2</Number>
      <Textarea value={value2} onChange={(e) => setValue2(e.target.value)} autoCapitalize="sentences"/>
    </Wrap>
    <Wrap>
      <Number>3</Number>
      <Textarea 
        value={value3} 
        onChange={(e) => setValue3(e.target.value)} 
        autoCapitalize="sentences" 
        autoComplete="off"
        autoCorrect="off"
      />
    </Wrap>
    <Wrap>
      <Number>4</Number>
      <Textarea 
        value={value4} 
        onChange={(e) => setValue4(formatTextArea(e.target.value))} 
        autoCapitalize="sentences"
      />
    </Wrap>
    </>
  )
}

const Wrap = styled.div`
  margin-bottom: 30px;
`

const Number = styled.h1``

const Textarea = styled.textarea`
  caret-color: #f43939;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 8px;
  border: solid 1px #dae1e8;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #21272e;
  resize: none;
  padding: 18px 16px;

  min-height: 124px;

  &::placeholder{
    color: #b4babf;
    line-height: 1.4;
  };
  &:focus{
    border-radius: 8px;
    border: solid 1px #3897ff;
    outline: none;
  };
`;