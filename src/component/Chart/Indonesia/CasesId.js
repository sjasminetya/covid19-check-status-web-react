import React, { Component } from 'react'
import Doughnut from 'chart.js'
import axios from 'axios'

export default class CasesId extends Component {
    doughnutRef = React.createRef()

    componentDidMount() {
        const myDoughnutRef = this.doughnutRef.current.getContext('2d')
        let positif = []
        let meninggal = []
        let sembuh = []

        axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}`)
        .then(res => {
            console.log(res.data)
            positif.push(res.data.positif)
            sembuh.push(res.data.sembuh)
            meninggal.push(res.data.meninggal)
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
                            data: [positif, sembuh, meninggal],
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
