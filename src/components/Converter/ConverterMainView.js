import React, { Component } from 'react';
import currency from "../../helpers/currency";

export default class ConverterMainView extends Component {
    constructor(props) {
        super(props);
        this.onChangeUSD = this.onChangeUSD.bind(this);
        this.submitUSD = this.submitUSD.bind(this);
        this.state = {
            usdValue: '',
            formattedUsd: ''
        }
    }

    componentDidMount(){
        this.props.getExchange()
        setInterval(() => this.props.getExchange(), 600000) // 10 minutes call to the API
    }

    onChangeUSD(e) {
        this.setState({
            usdValue: e.target.value,
            formattedUsd: currency.formatToUSD(parseFloat(e.target.value))
        })
    }

    submitUSD(e) {
        e.preventDefault();
        this.props.setEurValue(this.state.usdValue, this.props.exValue);
    }

    render() {
        return (
            <main className="pa4 black-80">
                <p>
                   <strong> Write the value in dollars (USD) that you want to convert into Euros (EUR) </strong>
            </p>
                <form className="measure center">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <div className="mt3 ">
                            <label className="db fw6 lh-copy f5" html-for="usd-value">$ USD Value</label>
                            <input onChange={this.onChangeUSD} value={this.state.usdValue}
                                className="pa2 input-reset ba bg-transparent w-100" name="usd-value" type="text" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" html-for="eur-result"> {this.state.formattedUsd} USD to EUR</label>
                            <input readOnly value={this.props.eurValue}
                                className="b pa2 input-reset ba bg-transparent w-100" name="eur-result" type="text" />
                        </div>
                    </fieldset>
                    <div className="">
                        { this.props.exValue == null &&
                        <input onClick={this.submitUSD} disabled
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Convert" />
                        }
                        { this.props.exValue != null &&
                        <input onClick={this.submitUSD}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Convert" />
                        }
                    </div>
                </form>
            </main>
        )
    }
}