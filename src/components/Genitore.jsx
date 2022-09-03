import React from "react";
import Figlio from "./Figlio";

class Genitore extends React.Component {

    constructor(props) {
        super(props);
        this.cambiaStato = this.cambiaStato.bind(this);
        this.state = { el: 'Sono lo stato iniziale del GENITORE' }
    }
    cambiaStato(elemento) {
        this.setState({ el: elemento })
    }

    render() {
        const data = this.state.el;
        return (
            <div className="p-5 text-center">
                <h2>SONO IL GENITORE</h2>
                <p>Per cambiare lo stato di un genitore da un componente figlio, bisogna seguire i seguenti passaggi:</p>
                <ol className="bg-dark text-light">
                    <li>La prima cosa da fare è creare una funzione nel genitore che serva a cambiare il suo stato con setState()</li>
                    <p>la funzione cambiaStato la trovate nel Genitore riga 11 </p>
                    <li>Un volta dichiarata la funzione dobbiamo creare un constructor e "bindare" CambiaStato, e lo stato del genitore deve essere dichiarato all'interno del costruttore</li>
                    <p>Questo passaggio lo trovate nel Genitore riga 5</p>
                    <li>Come ultima cosa dobbiamo passare la funzione come props al componente figlio (senza le parentesi mi raccomando)</li>
                </ol>
                <h5>Se sono riuscito a cambiare lo stato del genitore comparira qui: {data}</h5>
                <Figlio cambiaStato={this.cambiaStato} statoGenitore={this.state.el} />
            </div>
        )
    }
}

export default Genitore;