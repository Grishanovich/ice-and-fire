import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="HeaderBlock">
                <h3 className="HeaderTitle">
                    <a>Rick and Morty</a>
                </h3>
                <ul className="HeaderLinks">
                    <li>
                        <a href="/">All characters</a>
                    </li>
                    <li>
                        <a href="/" >Locations</a>
                    </li>
                    <li>
                        <a href="/">Episodes</a>
                    </li>
                </ul>
            </div>
        )
    }
}