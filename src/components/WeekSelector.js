import Selector from "./Selector";
import data from "../data/data";

export default function WeekSelector(props){
    const { variable, setVariable, week, setWeek, option, setOption, resultValue, setResultValue, resultPercentile, setResultPercentile } = props;

    function getTableWeeks(tableName){
        let weeks = []
        for(let i = 0; i < data.tables[tableName].length; i++){
            if(!(data.tables[tableName][i]["idade_gestacional"] in weeks)){
                weeks = [...weeks, data.tables[tableName][i]["idade_gestacional"]]
            }
        }
        return weeks
    }
    function handleChoiceWeek(event){
        setWeek(event.target.value);
        setOption("");
    }
    function handleChoice(event){
        setOption(event.target.value);
        setResultPercentile("");
        setResultValue("");
    }
    return(
        <Selector>
            {
                variable === "" ? 
                <h1>Escolha uma variável de interesse</h1>
                :<div>
                    <h1>Selecione a semana</h1>
                    <select value="Selecione a semana"
                    onChange={e => handleChoiceWeek(e)}>
                     {getTableWeeks(variable).map( (weekOption, idx) => {
                        return(
                            <option id={idx} value={weekOption}>Semana {weekOption}</option>
                        );
                        })
                     }
                    </select>
                </div>
            }
            {
                week === "" ? "" :
            <div>
                <h1>Selecione o modo de escolha</h1>
                <select value={option}
                onChange={e => handleChoice(e)}>
                    <option value = "percentile">Pelo percentil</option>
                    <option value = "value">Pelo valor medido</option>
                </select>
            </div>
            }
        </Selector>
    );
}