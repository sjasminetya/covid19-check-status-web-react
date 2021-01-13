import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <Footer/>
            </div>
        )
    }
}
