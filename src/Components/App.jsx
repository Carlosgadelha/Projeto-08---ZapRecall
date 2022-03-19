import {useState} from 'react';
import Flashcards from './Flashcards';

export default function App(){

    const [tela, setTela] = useState(false)
    
    if (tela === true) return (
        <Flashcards/>
    )

    return(
        <div className="inicio">
            <img src="assets/img/logo.png"/>
            <h1>ZapRecall</h1>
            <button name="button" onClick={()=> setTela(true)}>Iniciar Recall!</button>
        </div>
    )
        
    
}