import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            value: 0,
            final: 0,
            from: '',
            to: ''
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
                this.setState({
                    final: Number(data.rates[this.state.to] * this.state.value).toFixed(4)
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
                            placeholder="0"
                            className="form-control" />
                        <select
                            name="from"
                            onChange={this.handleChangeInput}
                            className="form-control">
                            <option value="">от</option>
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
                            <option value="">към</option>
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
                            {!isNaN(this.state.final)? this.state.final +" "+ this.state.to : 0}
                        </button>
                    </center>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))