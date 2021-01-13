import React, { Component } from 'react'
import Chart from 'chart.js'
import axios from 'axios'
import moment from 'moment'

export default class DeathCart extends Component {
    chartRef = React.createRef()

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d')
        let date = []
        let death = []

        axios.get(`${process.env.REACT_APP_API_COVID19}world?from=2020-03-01&to=${new Date()}`)
        .then(res => {
            res.data.map((item) =>
                death.push(item.TotalDeaths) 
            )
            res.data.map((item) =>
                date.push(moment(item.Date).format("MMM Do YY")) 
            )
            new Chart(myChartRef, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [
                        {
                            label: 'Death',
                            data: death,
                            fill: false,
                            borderColor: "#ff0000"
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
