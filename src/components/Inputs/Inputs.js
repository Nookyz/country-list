import styled from 'styled-components'

const Inputs = () => {
  
  return (
    <Wrapper
      
    >

      <View>
        <Input3 />
        <Style>
          none
        </Style>
      </View>

      <View>
        <Input1 />
        <Style>
          text-transform: capitalize;
        </Style>
      </View>

      <View>
        <Input2 />
        <Style>
          {`::first-letter { text-transform: capitalize; }`}
        </Style>
      </View>

      <View>
        <Input3 autoCapitalize="on" />
        <Style>
          {`autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <Input3 autoCapitalize="off" />
        <Style>
          {`autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <Input3 autoCapitalize="sentences" />
        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <Input3 autoCapitalize="words" />
        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <Input3 autoCapitalize="characters" />
        <Style>
          {`autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <Input1 autoCapitalize="on" />
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <Input1 autoCapitalize="off" />
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <Input1 autoCapitalize="sentences" />
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <Input1 autoCapitalize="words" />
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="words"`}
        </Style>
      </View>

      <View>
        <Input1 autoCapitalize="sentences" />
        <Style>
          {`
          text-transform: capitalize;\n
          autoCapitalize="characters"`}
        </Style>
      </View>

      <View>
        <Input2 autoCapitalize="on" />
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="on"`}
        </Style>
      </View>

      <View>
        <Input2 autoCapitalize="off" />
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="off"`}
        </Style>
      </View>

      <View>
        <Input2 autoCapitalize="sentences" />
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="sentences"`}
        </Style>
      </View>

      <View>
        <Input2 autoCapitalize="words" />
        <Style>
          {`
          ::first-letter { text-transform: capitalize; }\n
          autoCapitalize="words"`}
        </Style>
      </View>

      <View>
        <Input2 autoCapitalize="sentences" />
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

const Input1 = styled.input`
  padding: 8px 16px;
  text-transform: capitalize;
`;

const Input2 = styled.input`
  padding: 8px 16px;
  ::first-letter{
    text-transform: capitalize;
  }
`;

const Input3 = styled.input`
  padding: 8px 16px;
`;

const Style = styled.div`
  margin-top: 10px; 
  color: #fe546e;
`

export default Inputs;