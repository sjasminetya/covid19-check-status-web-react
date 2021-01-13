import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Chart from '../component/Chart/Indonesia/Chart'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 Indonesia Condition</h1>
                    <Chart/>
                </div>
                <Footer/>
            </div>
        )
    }
}
