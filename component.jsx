import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            value: 0,
            final: 0,
            finalIncome: 0,
            from: 'BGN',
            to: 'BGN'
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleChangeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            fetch('https://api.exchangeratesapi.io/latest?base='+this.state.from+'&symbols='+this.state.to)
            .then(response => response.json())
            .then(data => {
                let final = Number(data.rates[this.state.to] * this.state.value).toFixed(4)
                let finalIncome = Number((this.state.value*2)/100).toFixed(4)
                this.setState({
                    final: Number(final),
                    finalIncome: Number(final) + Number(finalIncome)
                })
            })
        })
    }

    render() {
        return (
            <div className="container">
            <br />
                <div className="form-group">
                    <div className="input-group">
                        <input
                            type="number"
                            name="value"
                            onChange={this.handleChangeInput}
                            className="form-control" />
                        <select
                            name="from"
                            onChange={this.handleChangeInput}
                            className="form-control">
                            <option value="BGN">BGN</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="RON">RON</option>
                            <option value="TRY">TRY</option>
                            <option value="CHF">CHF</option>
                            <option value="SEK">SEK</option>
                            <option value="DKK">DKK</option>
                            <option value="NOK">NOK</option>
                            <option value="RUB">RUB</option>
                            <option value="PLN">PLN</option>
                            <option value="HUF">HUF</option>
                            <option value="JPY">JPY</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                        </select>
                        <select
                            name="to"
                            onChange={this.handleChangeInput}
                            className="form-control">
                            <option value="BGN">BGN</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="RON">RON</option>
                            <option value="TRY">TRY</option>
                            <option value="CHF">CHF</option>
                            <option value="SEK">SEK</option>
                            <option value="DKK">DKK</option>
                            <option value="NOK">NOK</option>
                            <option value="RUB">RUB</option>
                            <option value="PLN">PLN</option>
                            <option value="HUF">HUF</option>
                            <option value="JPY">JPY</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                        </select>
                    </div>
                    <br />
                    <center>
                        <button
                            className="btn btn-success">
                            {this.state.final} {this.state.to}
                        </button>
                        <br />
                        <button
                            className="btn btn-danger">
                            {this.state.finalIncome} {this.state.to} + 2%
                        </button>
                    </center>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))