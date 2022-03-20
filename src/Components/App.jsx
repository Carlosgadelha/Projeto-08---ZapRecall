import {useState} from 'react';
import Flashcards from './Flashcards/Flashcards';

import "../assets/css/reset.css";
import "../assets/css/estilos.css";
import logo from "../assets/img/logo.png"

export default function App(){

    const [tela, setTela] = useState(false)
    
    if (tela === true) return (
        <Flashcards/>
    )

    return(
        <div className="inicio">
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button name="button" onClick={()=> setTela(true)}>Iniciar Recall!</button>
        </div>
    )
        
    
}