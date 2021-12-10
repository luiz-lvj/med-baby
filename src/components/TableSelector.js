import Selector from "./Selector";

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

export default function TableSelecter(props){
    const { variable, setVariable, week, setWeek, option, setOption, resultValue, setResultValue, resultPercentile, setResultPercentile } = props;

    function setQuery(tableName){
        setVariable(tableName);
        setWeek("");
        setOption("");
    }

    return(
        <Selector>
            <h1>Escolha a variável de interesse</h1>
            {   
                tables.map( (table, idx) => {
                    return(
                    <div>
                        
                        <button id={idx} onClick={() => setQuery(table.nameDb)}>
                            <h2>{table.nameForUsers}</h2>
                        </button>
                    </div>
                    );
                })
            }

        </Selector>
    );
}

