import React, { useState } from "react";
import Nav from "./nav";
import { ReactComponent as Switch } from "../switch.svg";

function Form(){
    const [string, setString] = useState('');
    const [output, setOutput] = useState('');
    const [state, setState] = useState("to-mng");
    const [k, setK] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/?string=${string}&eNum=${state}`)
            .then(res => res.json())
            .then(data => setOutput(data.text));
    }
    const handleButton = () => {
        if(state === "to-mng"){
            setState("to-mn");
            setK(1);
        }else{
            setState("to-mng");
            setK(0);
        };
        setOutput('');
        setString('');
        const box1 = document.querySelector(".item1"); 
        const box2 = document.querySelector(".item2"); 
        const box3 = document.querySelector(".item3"); 
        if(k){
            box1.style.writingMode = 'horizontal-tb';
            box2.style.writingMode = 'vertical-lr';
        }else{
            box1.style.writingMode = 'vertical-lr';
            box2.style.writingMode = 'horizontal-tb';
        }
    }
    return(
        <div className="root">
            <div className="changeButton">
                <div className="enum"><p>{!k ? "Кирилл" : "Бичиг"}</p></div>
                <button onClick={handleButton} className="switch">
                    <Switch className="svg"/>
                </button>
                <div className="enum"><p>{k ? "Кирилл" : "Бичиг"}</p></div>
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="item1"
                    autofocus="autofocus" 
                    maxlength="200" 
                    type="text" 
                    value={string} 
                    onChange={ (e) => setString(e.target.value) }/>
                <textarea className="item2" type="text" readonly="readonly" value={output} />
                <div className="item3">
                    <button className="button-18" type="submit">Хөрвүүлэх</button>
                </div>
            </form>
        </div>
    );
}

export default function Root() {
    return(
        <>
            <Nav k={1}/>
            <Form/>
        </>
    );
}
