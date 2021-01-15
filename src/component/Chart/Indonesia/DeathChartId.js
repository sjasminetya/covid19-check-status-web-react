import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

export default function DeathChartId() {
    const [chartData, setChartData] = useState({})
    const [death] = useState([])
    const [date] = useState([])

    const chart = () => {
        axios.get(`${process.env.REACT_APP_API_COVID19}country/indonesia?from=2020-03-01&to=${new Date()}`)
        .then(res => {
            console.log(res.data)
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
                        label: 'Death',
                        data: death,
                        fill: false,
                        borderColor: '#F01159'
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