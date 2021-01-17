import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Doughnut from '../component/Chart/Indonesia/ChartIndonesia'
import Table from '../component/Table/TableProvinsi'
import Card from '../component/Card/Card'
import styles from './Overview/Overview.module.css'
import axios from 'axios'
import moment from 'moment'

export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positive: [],
            deaths: [],
            date: [],
            recovered: []
        }
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}`)
        .then(res => {
            const data = res.data
            console.log(data)
            this.setState({
                positive: data.positif,
                date: moment(data.lastUpdate).format("MMMM Do YYYY"),
                deaths: data.meninggal,
                recovered: data.sembuh
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
                    <h1>COVID-19 Indonesia Condition</h1>
                    <h4>Last Update at {this.state.date}</h4>
                    <div className={styles['card-box']}>
                        <Card className={styles['total-cases']} title="Positive" text={this.state.positive} />
                        <Card className={styles['total-death']} title="Deaths" text={this.state.deaths} />
                        <Card className={styles['total-recovered']} title="Recovered" text={this.state.recovered} />
                    </div>
                    <Doughnut/>
                    <br/>
                    <h4>Data COVID-19 Province Indonesia</h4>
                    <Table/>
                    <br/>
                </div>
                <Footer/>
            </div>
        )
    }
}
