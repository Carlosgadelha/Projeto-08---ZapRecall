export default function (Tela02){

    const perguntas = [{titulo: 'pergunta 01'}, 
                       {titulo: 'pergunta 02'},
                       {titulo: 'pergunta 03'},
                       {titulo: 'pergunta 04'}]
    return(
        <div className="tela02">
            <figure>
                <img src="assets/img/logo-pequeno.png"/>
                <h1>ZapRecall</h1>
            </figure>
            {perguntas.map(pergunta => <Pergunta titulo={pergunta.titulo}/>)}
            
        </div>

    )
}


function Pergunta(props){
    return(
        <div className="pergunta">
            <p>{props.titulo}</p>
        </div>
    )
}