import React from "react";
import InputTemperatura from "./InputTemperatura";
import VerdettoEbollizione from "./VerdettoEbolozione";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function conversione(temperatura, converti) {
    const input = parseFloat(temperatura);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = converti(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calcolatore extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
        this.state = { temperatura: '', scala: 'c' };
    }

    handleChangeCelsius(temperatura) {
        this.setState({ scala: 'c', temperatura });
    }

    handleChangeFahrenheit(temperatura) {
        this.setState({ scala: 'f', temperatura });
    }

    render() {
        const scala = this.state.scala;
        const temperatura = this.state.temperatura;
        const celsius = scala === 'f' ? conversione(temperatura, toCelsius) : temperatura;
        const fahrenheit = scala === 'c' ? conversione(temperatura, toFahrenheit) : temperatura;

        return (
            <div>
                <InputTemperatura
                    scala="c"
                    temperatura={celsius}
                    onChangeTemperatura={this.handleChangeCelsius} />
                <InputTemperatura
                    scala="f"
                    temperatura={fahrenheit}
                    onChangeTemperatura={this.handleChangeFahrenheit} />
                <VerdettoEbollizione
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calcolatore;