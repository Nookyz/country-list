import styled from 'styled-components'
// import Pdf from "react-to-pdf";
import { useRef } from 'react';
import pdf from 'html-pdf'
// import html from '../index.html'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Test = () => {
  const ref = useRef();

  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
  };
  
  const margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522
  };

  const f = () => {
    
    pdf.create(ref, options).toFile('./businesscard.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
  }

  const f2 = () => {
    html2canvas(document.querySelector("#root")).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      // imageData?:any, format?:any, x?:number, y?:number, w?:number, h?:number, alias?:any, compression?:any, rotation?:any
      // 32 - margin left (max-width: 552px)
      pdf.addImage(imgData, 'PNG', 32, 0);  
      pdf.save("download.pdf"); 
    });

    // const pdf = new jsPDF();
    // pdf.html(document.body);
    // pdf.save("download.pdf"); 
  }

  const f3 = () => {
    // const page = fs.readFileSync("./source.html", "utf-8");
    pdf
    .create(document.querySelector('#root'), {
      width: "1440px",
      height: "4800px",
      margin: "0px"
    })
    .toFile("./test.pdf", (e, res) => {
      if (e) {
        console.error("error", e);
        return;
      }
      console.log("success");
    });
  }
  return (
    <Wrapper id='test'>
      
      {/* <Pdf targetRef={ref} filename="code-example.pdf" x={552} >
        {({ toPdf }) => (
          <Button onClick={toPdf}>
            Button PDF
          </Button>
        )}
      </Pdf> */}

      <Button onClick={f2}>
        Button PDF html
      </Button>

      <Content ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Circle />
      </Content>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin-top: 50px;
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #8e85b7;
`

export default Test
