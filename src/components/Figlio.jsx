import React from 'react';
import Figliolo from './Figliolo';

class Figlio extends React.Component {
    constructor(props) {
        super(props);
        this.cambiaGenitore = this.cambiaGenitore.bind(this);
        this.triggeraFiglio = this.triggeraFiglio.bind(this);
    }
    cambiaGenitore(el) {
        this.props.cambiaStato(el)
    }
    triggeraFiglio(el) {
        this.cambiaGenitore(el)
    }
    render() {
        return (
            <div className='my-5'>
                <h2>SONO IL FIGLIO!</h2>
                <p>Per cambiare lo stato da un figlio a un genitore, bisogna seguire i seguenti passaggi:</p>
                <ol className='bg-dark text-light'>
                    <li>La prima cosa da fare è creare una funzione nel figlio che richiama la props precedentente passata e cambia lo stato del genitore</li>
                    <p>La funzione cambiaGenitore la trovate nel Figlio riga 10</p>
                    <li>Una volta creata la funzione dobbiamo creare un constructor e "bindare" cambiaGenitore()</li>
                    <li>Ora non ci resta altro che creare un pulsante che richiamerà la funzione ed è fatta! :)</li>
                </ol>
                <button className='my-2' onClick={() => {
                    this.cambiaGenitore('Sono il FIGLIO che cambia lo stato del GENITORE!')
                }}>Cambiami!</button><br />
                <button>{this.props.statoGenitore}</button>
                <Figliolo statoGenitore={this.props.statoGenitore} triggeraFiglio={this.triggeraFiglio} />
            </div>
        )
    }

}

export default Figlio;