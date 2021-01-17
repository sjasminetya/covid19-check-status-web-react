import React, { Component } from 'react'
import Header from '../../component/Header/Header'
import Jumbotron from '../../component/Jumbotron/Jumbotron'
import Footer from '../../component/Footer/Footer'
import Chart from '../../component/Chart/World/ChartGlobal'
import Card from '../../component/Card/Card'
import styles from './Overview.module.css'
import axios from 'axios'
import moment from 'moment'

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            death: [],
            recovered: [],
            date: [],
            confirm: []
        }
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_COVID19_WORLD}`)
        .then(res => {
            console.log(res.data)
            const data = res.data
            this.setState({
                death: data.deaths.value,
                date: moment(data.lastUpdate).format("MMMM Do YYYY"),
                recovered: data.recovered.value,
                confirm: data.confirmed.value
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 Global Situation</h1>
                    <h4>Update at {this.state.date}</h4>
                    <div className={styles['card-box']}>
                        <Card className={styles['total-cases']} title="Confirm" text={this.state.confirm} />
                        <Card className={styles['total-death']} title="Deaths" text={this.state.death} />
                        <Card className={styles['total-recovered']} title="Recovered" text={this.state.recovered} />
                    </div>
                    <h3>Statistics COVID-19 in Global</h3>
                    <Chart/>
                </div>
                <Footer/>
            </div>
        )
    }
}
