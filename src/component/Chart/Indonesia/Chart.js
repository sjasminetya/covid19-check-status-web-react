import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

export default function Chart() {
    const [chartData, setChartData] = useState({})
    const [confirm] = useState([])
    const [death] = useState([])
    const [date] = useState([])

    const chart = () => {
        axios.get(`${process.env.REACT_APP_API_COVID19}country/indonesia?from=2020-03-01&to=${new Date()}`)
        .then(res => {
            console.log(res.data)
            res.data.map((item) =>
                confirm.push(item.Confirmed)
            )
            res.data.map((item) =>
                death.push(item.Deaths)
            )
            res.data.map((item) =>
                date.push(moment(item.Date).format("MMM Do YY"))
            )
            setChartData({
                labels: date,
                datasets: [
                    {
                        label: 'Confirmed',
                        data: confirm,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 1,
                        pointRadius: 1,
                        pointHitRadius: 10
                    },
                    {
                        label: 'Death',
                        data: death,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(255, 0, 0)',
                        borderColor: 'rgba(255, 0, 0)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(255, 0, 0)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(255, 0, 0)',
                        pointHoverBorderColor: 'rgba(255, 0, 0)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10
                    }
                ]
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    useEffect(() => {
        chart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Line data={chartData}></Line>
        </div>
    )
}