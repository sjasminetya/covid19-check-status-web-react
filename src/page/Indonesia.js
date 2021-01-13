import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Confirm from '../component/Chart/Indonesia/ConfirmChartId'
import Death from '../component/Chart/Indonesia/DeathChartId'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 Indonesia Condition</h1>
                    <Confirm/>
                    <br/>
                    <Death/>
                    <br/>
                </div>
                <Footer/>
            </div>
        )
    }
}
