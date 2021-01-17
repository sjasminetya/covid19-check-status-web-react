import React, { Component } from 'react'
import Doughnut from 'chart.js'
import axios from 'axios'

export default class ChartIndonesia extends Component {
    doughnutRef = React.createRef()

    constructor(props) {
        super(props)
        this.state = {
            positive: [],
            deaths: [],
            recovered: []
        }
    }

    componentDidMount() {
        const myDoughnutRef = this.doughnutRef.current.getContext('2d')

        axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}`)
        .then(res => {
            console.log(res.data)
            const data = res.data
            console.log(data)
            this.setState({
                positive: data.positif,
                deaths: data.meninggal,
                recovered: data.sembuh
            })
            new Doughnut(myDoughnutRef, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Positive',
                        'Deaths',
                        'Recovered'
                    ],
                    datasets: [
                        {
                            data: [this.state.positive, this.state.deaths, this.state.recovered],
                            backgroundColor: ['#82CDE5', '#B11E31', '#096344']
                        }
                    ]
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <canvas id='myChart' ref={this.doughnutRef}></canvas>
            </div>
        )
    }
}
