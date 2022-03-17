import {useState} from 'react';
import Tela02 from './Tela02';

export default function App(){

    const [tela, setTela] = useState(0)
    
    if (tela === 1) return (
        <Tela02/>
    )

    return(
        <div className="inicio">
            <img src="assets/img/logo.png"/>
            <h1>ZapRecall</h1>
            <button name="button" onClick={()=> setTela(1)}>Iniciar Recall!</button>
        </div>
    )
        
    
}