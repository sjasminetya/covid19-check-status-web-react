import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white fixed-top">
                    <div className="container">
                        <h2 className="navbar-brand text-white">COVID-19 Status</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className={styles.overview} to="/overview">Overview</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={styles.overview} to="/indonesia">Indonesia</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
