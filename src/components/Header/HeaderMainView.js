import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/luis.jpg"

export default class Header extends Component {
    render() {
        return (
            <header class="tc pv4 pv5-ns down-border">
                <img src="/build/assets/luis.jpg" class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
                <h1 className="f5 f4-ns fw6 mid-gray">Luis Mendoza</h1>
                <h2 className="f6 gray fw2 ttu tracked">A Test for Bellatrix</h2>
                <nav class="bt bb tc center mt4">
                    <Link className="f6 f4-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" to="/">Convert</Link>
                    <Link className="f6 f4-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" to="/about">About</Link>
                    <Link className="f6 f4-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" to="/contact">Contact</Link>
                </nav>
            </header>
        )
    }
}