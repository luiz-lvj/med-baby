import styled from "styled-components"

const Selector = styled.div`
width: 500px;
max-width: 500px;
max-height: 450px;
border-radius: 8px;
border: 3px gray solid;
padding: 10px;
align-items: center;
margin-left: 10px;
margin-right: 25px;
overflow: scroll;
margin-top: 80px;

button{
    background-color: lightblue;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 15px;
    width: 100%;
}
select{
    background-color: lightblue;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 15px;
    width: 100%;
    color: blue;
    font-size: 16px;
}
h2{
    display: block;
    margin-bottom: 5px;
    color: blue;
    font-size: 20px;
    :hover{
        opacity: 0.6;
        cursor: pointer;
    }
}
h1{
    display: block;
    margin-bottom: 5px;
}
@media(max-width: 500px){
    width: 90%;
    padding: 5px;
    margin-bottom: 5px;
    top: 200px;
    button{
        margin-bottom: 5px;
    }
}
`;

export default Selector;