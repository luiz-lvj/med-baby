import { useState } from "react/cjs/react.development";
import Selector from "./Selector";
import data from "../data/data";

export default function InputSelector(props){
    const { variable, setVariable, week, setWeek, option, setOption, resultValue, setResultValue, resultPercentile, setResultPercentile } = props;
    const [choosenValue, setChoosenValue] = useState("");
    const [choosenPercentile, setChoosenPercentile] = useState("");

    function getPercentiles(){
        if(option === "percentile"){
            let allPercentiles = [];
            for(let i = 0; i < data.tables[variable].length; i++){
                if(!(data.tables[variable][i]["percentil"] in allPercentiles)){
                    allPercentiles = [...allPercentiles, data.tables[variable][i]["percentil"]]
                }
            }
            allPercentiles = allPercentiles.filter(function(item, pos) {
                return allPercentiles.indexOf(item) == pos;
            })
            return allPercentiles;
        }
    }

    function getValues(){
        if(option === "value"){
            let allValues = [];
            for(let i = 0; i < data.tables[variable].length; i++){
                if(!(data.tables[variable][i]["valor"] in allValues)){
                    allValues = [...allValues, data.tables[variable][i]["valor"]]
                }
            }
            return allValues;
        }
    }
    
    function getResultWithValue(correctValue){
        setChoosenValue(correctValue);
        for(let i = 0; i < data.tables[variable].length; i++){
            if(data.tables[variable][i]["valor"] === choosenValue){
                setResultValue(data.tables[variable][i]["valor"])
                setResultPercentile(data.tables[variable][i]["percentil"]);
                setChoosenPercentile("");
                setChoosenValue("");
                break;
            }
        }

    }

    function getResultWithPercentile(correctPercentile){
        setChoosenPercentile(correctPercentile);
        for(let i = 0; i < data.tables[variable].length; i++){
            if(data.tables[variable][i]["percentil"] === choosenPercentile){
                setResultValue(data.tables[variable][i]["valor"])
                setResultPercentile(data.tables[variable][i]["percentil"]);
                setChoosenPercentile("");
                setChoosenValue("");
                break;
            }
        }

    }

    return(
        <Selector>
            {option === "" ? 
                <h1> Preencha todos os campos </h1>
                : 
                <div>
                    {option === "value" ? 
                    <div>
                        <h1>Selecione o valor mais próximo da medida</h1>
                        {getValues().map((oneValue, idx) => {
                            return(
                                <button id={idx} onClick={() => getResultWithValue(oneValue)}>
                                    <h2>{oneValue}</h2>
                                </button>
                            );
                        })}
                    </div>
                    :
                    <div>
                        <h1>Selecione o percentil mais próximo</h1>
                        {getPercentiles().map((onePercentile, idx) => {
                            return(
                                <button id={idx} onClick={() => getResultWithPercentile(onePercentile)}>
                                    <h2>{onePercentile}</h2>
                                </button>
                            );
                        })}
                    </div>
                    }
                </div>
            }
        </Selector>
    );
}