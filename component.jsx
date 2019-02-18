import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            bgn: 1,
            eur: 1.95,
            usd: 0,
            gbp: 0,
            ron: 0,
            try: 0,
            chf: 0,
            sek: 0,
            dkk: 0,
            nok: 0,
            rub: 0,
            pln: 0,
            huf: 0,
            jpy: 0,
            aud: 0,
            cad: 0,
            value: 0,
            final: 0,
            from: '',
            to: ''
        }

        this.handleConvert = this.handleConvert.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    componentDidMount() {

        fetch('https://30nalowl00.execute-api.us-east-1.amazonaws.com/dev/currencies/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(jsondata => {

                this.setState({
                    usd: Number(jsondata[0][29]["Лева (BGN)"]),
                    gbp: Number(jsondata[0][7]["Лева (BGN)"]),
                    ron: Number(jsondata[0][23]["Лева (BGN)"]),
                    try: Number(jsondata[0][28]["Лева (BGN)"]),
                    chf: Number(jsondata[0][3]["Лева (BGN)"]),
                    sek: Number(jsondata[0][25]["Лева (BGN)"]),
                    dkk: Number(jsondata[0][6]["Лева (BGN)"]),
                    nok: Number(jsondata[0][19]["Лева (BGN)"]),
                    rub: Number(jsondata[0][24]["Лева (BGN)"]),
                    pln: Number(jsondata[0][22]["Лева (BGN)"]),
                    huf: Number(jsondata[0][10]["Лева (BGN)"]),
                    jpy: Number(jsondata[0][15]["Лева (BGN)"]),
                    aud: Number(jsondata[0][0]["Лева (BGN)"]),
                    cad: Number(jsondata[0][2]["Лева (BGN)"]),
                })

            })
    }

    handleChangeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleConvert() {

        let c1, c2

        switch (this.state.from) {
            case 'bgn':
                c1 = 1
                break
            case 'eur':
                c1 = 1.95
                break
            case 'usd':
                c1 = this.state.usd
                break
            case 'gbp':
                c1 = this.state.gbp
                break
            case 'ron':
                c1 = this.state.ron
                break
            case 'try':
                c1 = this.state.try
                break
            case 'chf':
                c1 = this.state.chf
                break
            case 'sek':
                c1 = this.state.sek
                break
            case 'dkk':
                c1 = this.state.dkk
                break
            case 'nok':
                c1 = this.state.nok
                break
            case 'rub':
                c1 = this.state.rub
                break
            case 'pln':
                c1 = this.state.pln
                break
            case 'huf':
                c1 = this.state.huf
                break
            case 'jpy':
                c1 = this.state.jpy
                break
            case 'aud':
                c1 = this.state.aud
                break
            case 'cad':
                c1 = this.state.cad
                break
            default:
                c1 = 1
                break
        }

        switch (this.state.to) {
            case 'bgn':
                c2 = 1
                break
            case 'eur':
                c2 = 1.95
                break
            case 'usd':
                c2 = this.state.usd
                break
            case 'gbp':
                c2 = this.state.gbp
                break
            case 'ron':
                c2 = this.state.ron
                break
            case 'try':
                c2 = this.state.try
                break
            case 'chf':
                c2 = this.state.chf
                break
            case 'sek':
                c2 = this.state.sek
                break
            case 'dkk':
                c2 = this.state.dkk
                break
            case 'nok':
                c2 = this.state.nok
                break
            case 'rub':
                c2 = this.state.rub
                break
            case 'pln':
                c2 = this.state.pln
                break
            case 'huf':
                c2 = this.state.huf
                break
            case 'jpy':
                c2 = this.state.jpy
                break
            case 'aud':
                c2 = this.state.aud
                break
            case 'cad':
                c2 = this.state.cad
                break
            default:
                c2 = 1
                break
        }

        this.setState({
            final: Number(this.state.value * (c1 / c2))
        })
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <br />
                    евро (EUR) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.eur} лв.</a>, 
                    щатски долар (USD) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.usd} лв.</a>, 
                    британска лира (GBP) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.gbp} лв.</a>, 
                    нова румънска лея (RON) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.ron} лв.</a>, 
                    нова турска лира (TRY) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.try} лв.</a>, 
                    швейцарски франк (CHF) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.chf} лв.</a>, 
                    шведска крона (SEK) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.sek} лв.</a>,
                    датска крона (DKK) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.dkk} лв.</a>, 
                    норвежка крона (NOK) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.nok} лв.</a>, 
                    руска рубла (RUB) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.rub} лв.</a>, 
                    полска злота (PLN) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.pln} лв.</a>, 
                    унгарски форинт (HUF) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.huf} лв.</a>, 
                    японска йена (JPY) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.jpy} лв.</a>, 
                    австралийски долар (AUD) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.aud} лв.</a>, 
                    канадски долар (CAD) - <a className="badge badge-success" style={{color: 'white'}}>{this.state.cad} лв.</a>
                    <br />
                    <br />
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
                            <option value="bgn">BGN</option>
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                            <option value="gbp">GBP</option>
                            <option value="ron">RON</option>
                            <option value="try">TRY</option>
                            <option value="chf">CHF</option>
                            <option value="sek">SEK</option>
                            <option value="dkk">DKK</option>
                            <option value="nok">NOK</option>
                            <option value="rub">RUB</option>
                            <option value="pln">PLN</option>
                            <option value="huf">HUF</option>
                            <option value="jpy">JPY</option>
                            <option value="aud">AUD</option>
                            <option value="cad">CAD</option>
                        </select>
                        <select
                            name="to"
                            onChange={this.handleChangeInput}
                            className="form-control">
                            <option value="bgn">BGN</option>
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                            <option value="gbp">GBP</option>
                            <option value="ron">RON</option>
                            <option value="try">TRY</option>
                            <option value="chf">CHF</option>
                            <option value="sek">SEK</option>
                            <option value="dkk">DKK</option>
                            <option value="nok">NOK</option>
                            <option value="rub">RUB</option>
                            <option value="pln">PLN</option>
                            <option value="huf">HUF</option>
                            <option value="jpy">JPY</option>
                            <option value="aud">AUD</option>
                            <option value="cad">CAD</option>
                        </select>
                    </div>
                    <br />
                    <center>
                        <div className="btn-group" role="group" aria-label="">
                            <button
                                onClick={this.handleConvert}
                                className="btn btn-primary">
                                Изчисли
                            </button>
                            <button
                                className="btn btn-info">
                                {this.state.final}
                            </button>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))