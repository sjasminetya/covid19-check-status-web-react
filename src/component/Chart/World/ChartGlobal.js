import React, { Component } from 'react'
import Chart from 'chart.js'
import axios from 'axios'
import moment from 'moment'

export default class ChartGlobal extends Component {
    chartRef = React.createRef()

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d')
        let confirm = []
        let date = []
        let deaths = []

        axios.get(`${process.env.REACT_APP_API_COVID19_WORLD}/daily`)
        .then(res => {
            console.log(res.data)
            res.data.map((item) =>
                confirm.push(item.confirmed.total) 
            )
            res.data.map((item) =>
                date.push(moment(item.reportDate).format("MMM Do YYYY")) 
            )
            res.data.map((item) =>
                deaths.push(item.deaths.total)
            )
            new Chart(myChartRef, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [
                        {
                            label: 'Confirmed',
                            data: confirm,
                            backgroundColor: "rgba(138, 223, 223, 0.5)"
                        },
                        {
                            label: 'Deaths',
                            data: deaths,
                            backgroundColor: "rgba(255, 0, 0, 0.5)"
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
                <canvas id='myChart' ref={this.chartRef}></canvas>
            </div>
        )
    }
}
