import styled from 'styled-components'

const Inputs = () => {
  
  return (
    <Wrapper
      
    >

      <View>
        <View2>
          <Number>1</Number>
          <Input3 />
        </View2>
        
        <Style>
          none
        </Style>
      </View>

      <View>
        <View2>
          <Number>2</Number>
          <Input1 />
        </View2>

        <Style>
          text-transform: capitalize;
        </Style>
      </View>

      <View>
        <View2>
          <Number>3</Number>
          <Input2 />
        </View2>

        <Style>
          {`::first-letter { text-transform: capitalize; }`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>4</Number>
          <Input3 autoCapitalize="on" />
        </View2>
        
        <Style>
          {`autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>5</Number>
          <Input3 autoCapitalize="off" />
        </View2>
        
        <Style>
          {`autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>6</Number>
          <Input3 autoCapitalize="sentences" />
        </View2>
        
        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>7</Number>
          <Input3 autoCapitalize="words" />
        </View2>
        
        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>8</Number>
          <Input3 autoCapitalize="characters" />
        </View2>

        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>9</Number>
          <Input1 autoCapitalize="on" />
        </View2>
        
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>10</Number>
          <Input1 autoCapitalize="off" />
        </View2>
        
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>11</Number>
          <Input1 autoCapitalize="sentences" />
        </View2>
        
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>12</Number>
          <Input1 autoCapitalize="words" />
        </View2>
        
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="words"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>13</Number>
          <Input1 autoCapitalize="sentences" />
        </View2>
        
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="characters"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>14</Number>
          <Input2 autoCapitalize="on" />
        </View2>
        
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>15</Number>
          <Input2 autoCapitalize="off" />
        </View2>
        
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>16</Number>
          <Input2 autoCapitalize="sentences" />
        </View2>
        
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>17</Number>
          <Input2 autoCapitalize="words" />
        </View2>
        
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="words"`}
        </Style>
      </View>

      <View>
        <View2>
          <Number>18</Number>
          <Input2 autoCapitalize="sentences" />
        </View2>
        
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="characters"`}
        </Style>
      </View>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const View = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`
const View2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Number = styled.div`
  margin-right: 10px;
`

const Input1 = styled.input`
  padding: 8px 16px;
  width: 100%;
  text-transform: capitalize;
`;

const Input2 = styled.input`
  padding: 8px 16px;
  width: 100%;
  ::first-letter{
    text-transform: capitalize;
  }
`;

const Input3 = styled.input`
  padding: 8px 16px;
  width: 100%;
`;

const Style = styled.div`
  margin-top: 10px; 
  color: #fe546e;
`

export default Inputs;