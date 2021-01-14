import React, { Component } from 'react'
import Chart from 'chart.js'
import axios from 'axios'
import moment from 'moment'

export default class ConfirmChart extends Component {
    chartRef = React.createRef()

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d')
        let confirm = []
        let date = []

        axios.get(`${process.env.REACT_APP_API_COVID19}world?from=2020-03-01&to=${new Date()}`)
        .then(res => {
            console.log(res.data)
            res.data.map((item) =>
                confirm.push(item.TotalConfirmed) 
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
                            label: 'Confirmed',
                            data: confirm,
                            fill: false,
                            borderColor: "#82CDE5"
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
