import React, { Component } from 'react'
import Doughnut from 'chart.js'
import axios from 'axios'

export default class CasesId extends Component {
    doughnutRef = React.createRef()

    componentDidMount() {
        const myDoughnutRef = this.doughnutRef.current.getContext('2d')
        let positive = []
        let deaths = []
        let recovered = []

        axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}`)
        .then(res => {
            console.log(res.data)
            positive.push(res.data.positif)
            recovered.push(res.data.sembuh)
            deaths.push(res.data.meninggal)
            new Doughnut(myDoughnutRef, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Positive',
                        'Recovered',
                        'Death'
                    ],
                    datasets: [
                        {
                            data: [positive, recovered, deaths],
                            backgroundColor: ['#82CDE5', '#DFF8FE', '#F01159']
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
