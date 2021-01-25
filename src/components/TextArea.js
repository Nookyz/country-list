import styled from 'styled-components'

import TextareaAutosize from 'react-textarea-autosize';

export default function TextArea() {
  return (
    <div>
      <Textarea value='ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' />
    </div>
  )
}


const Textarea = styled(TextareaAutosize)`
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