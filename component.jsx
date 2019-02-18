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
                c1 = this.state.try
                break
            default:
                c2 = 1
                break
        }

        this.setState({
            final: Number(this.state.value * (c1 / c2)).toFixed(4)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <br />
                    1 евро = <a className="badge badge-success">{this.state.eur.toFixed(2)} лв.</a>
                    <br />
                    1 щатски долар = <a className="badge badge-warning">{this.state.usd.toFixed(2)} лв.</a>
                    <br />
                    1 британска лира = <a className="badge badge-danger">{this.state.gbp.toFixed(2)} лв.</a>
                    <br />
                    1 нова румънска лея = <a className="badge badge-info">{this.state.ron.toFixed(2)} лв.</a>
                    <br />
                    1 нова турска лира = <a className="badge badge-info">{this.state.try.toFixed(2)} лв.</a>
                    <br />
                    <br />
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
                    </select>
                    <br />
                    <center>
                        <button
                            onClick={this.handleConvert}
                            className="btn btn-primary">
                            Изчисли
                        </button>
                        <br />
                        <br />
                        <h1>{this.state.final}</h1>
                    </center>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))