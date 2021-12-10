import GlobalStyle from "./components/resetCSS";
import TableSelector from "./components/TableSelector";
import React  ,{useState,useEffect} from 'react';
import WeekSelector from "./components/WeekSelector";
import Header from "./components/Header";
import InputSelector from "./components/InputSelector";


function App() {
  const [variable, setVariable] = useState("");
  const [week, setWeek] = useState("");
  const [option, setOption] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [resultPercentile, setResultPercentile] = useState("");
  return (
    <>
    <React.Fragment>
      <GlobalStyle/>
    </React.Fragment>
    <Header
    variable={variable} setVariable={setVariable}
    week={week} setWeek={setWeek}
    option={option} setOption={setOption}
    resultValue={resultValue} setResultValue={setResultValue}
    resultPercentile={resultPercentile} setResultPercentile={setResultPercentile}
    />
    <TableSelector 
    variable={variable} setVariable={setVariable}
    week={week} setWeek={setWeek}
    option={option} setOption={setOption}
    resultValue={resultValue} setResultValue={setResultValue}
    resultPercentile={resultPercentile} setResultPercentile={setResultPercentile}/>
    <WeekSelector 
    variable={variable} setVariable={setVariable}
    week={week} setWeek={setWeek}
    option={option} setOption={setOption}
    resultValue={resultValue} setResultValue={setResultValue}
    resultPercentile={resultPercentile} setResultPercentile={setResultPercentile}/>
    <InputSelector
    variable={variable} setVariable={setVariable}
    week={week} setWeek={setWeek}
    option={option} setOption={setOption}
    resultValue={resultValue} setResultValue={setResultValue}
    resultPercentile={resultPercentile} setResultPercentile={setResultPercentile}/>
    </>
  );
}

export default App;
