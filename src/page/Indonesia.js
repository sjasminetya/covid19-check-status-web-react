import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Confirm from '../component/Chart/Indonesia/ConfirmChartId'
import Death from '../component/Chart/Indonesia/DeathChartId'
import Doughnut from '../component/Chart/Indonesia/CasesId'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 Indonesia Condition</h1>
                    <h2>Cases in Indonesia</h2>
                    <Doughnut/>
                    <br/>
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
