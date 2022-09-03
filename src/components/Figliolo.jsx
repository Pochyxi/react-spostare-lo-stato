import React from 'react';

class Figliolo extends React.Component {
    constructor(props) {
        super(props);
        this.cambiaFiglio = this.cambiaFiglio.bind(this);
    }
    cambiaFiglio(el) {
        this.props.triggeraFiglio(el)
    }

    render() {
        return (
            <div className='my-4'>
                <h2>SONO IL FIGLIOLO!</h2>
                <p>Per cambiare lo stato di un genitore da un componente figlio che a sua volta è figlio di un genitore, leggete il codice e non fatemi scrivere più, i passaggi sono i medesimi ;D</p>
                <button className='my-2' onClick={() => {
                    this.cambiaFiglio('Sono il FIGLIOLO che ha richiamato la funzione del FIGLIO che ha sua volta a richiamato la funzione per cambiare lo stato del GENITORE')
                }}>Cambiami!</button><br />
                <button>{this.props.statoGenitore}</button>
            </div>
        )
    }
}

export default Figliolo;