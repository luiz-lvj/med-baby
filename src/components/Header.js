import styled from 'styled-components';


const tables = [
    {
        "nameForUsers": "Comprimento Osso Nasal Fetal (mm)",
        "nameDb": "comprimento_osso_nasal_fetal_mm"
    },
    {
        "nameForUsers": "Diâmetro Bipariental (cm)",
        "nameDb": "diametro_bipariental_cm"
    },
    {
        "nameForUsers": "Átrio Ventricular (mm)",
        "nameDb": "atrio_ventricular_mm",
    },
    {
        "nameForUsers": "Circunferência Craniana (cm)",
        "nameDb": "circunferencia_craniana_cm",
    },
    {
        "nameForUsers": "Diâmetro da órbita (mm)",
        "nameDb": "diametro_da_orbita_mm",
    },
    {
        "nameForUsers": "Distância interorbitária Externa (mm)",
        "nameDb": "distancia_interorbitaria_externa_mm",
    },
    {
        "nameForUsers": "Distância interorbitária Interna (mm)",
        "nameDb": "distancia_interorbitaria_interna_mm",
    },
    {
        "nameForUsers": "Fêmur (cm)",
        "nameDb": "femur_cm",
    },
    {
        "nameForUsers": "Fíbula (cm)",
        "nameDb": "fibula_cm",
    },
    {
        "nameForUsers": "Pé (cm)",
        "nameDb": "pe",
    },
    {
        "nameForUsers": "Rádio (cm)",
        "nameDb": "radio",
    },
    {
        "nameForUsers": "Tíbia (cm)",
        "nameDb": "tibia_cm",
    },
    {
        "nameForUsers": "Úmero (cm)",
        "nameDb": "umero"
    }
]

export default function Header(props){
    const { variable, setVariable, week, setWeek, option, setOption, resultValue, setResultValue, resultPercentile, setResultPercentile } = props;

    function getVariableName(){
        for(let i = 0; i < tables.length; i++){
            if(tables[i]["nameDb"] === variable){
                return tables[i]["nameForUsers"];
            }
        }
    }

    return(
        <HeaderStyle>
            <h1>MedBaby</h1>
            {
                variable == "" || week == "" || option == "" || resultPercentile == "" || resultValue == "" ?
                <div>
                    <p>Preencha os dados abaixo</p>
                </div>
                : <div>
                    <p> Um feto na semana <span>{week}</span> tem <span>{getVariableName()}</span> de medida <span>{resultValue}</span> no percentil <span>{resultPercentile}</span></p>
                </div>
            }
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    margin-bottom: 15px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    h1{
        display: block;
        color: #FFFFFF;
        font-size: 35px;
        font-weight: bold;
    }
    div{
        width: 100%;
        text-align: left;
        margin-top: 3px;
        p{
            span{
                font-weight: bold;
            }
        }
    }
`;