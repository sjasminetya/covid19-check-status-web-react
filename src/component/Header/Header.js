import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h2 className="navbar-brand">COVID-19 Status</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className={styles.overview} to="/overview">Overview</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}