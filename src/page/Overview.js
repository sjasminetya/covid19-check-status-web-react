import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Confirm from '../component/Chart/World/ConfirmChart'
import Death from '../component/Chart/World/DeathCart'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 In The World</h1>
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
