import React from 'react'
import CountUp from 'react-countup'

export default function Card({ title, text, className }) {
    return (
        <div className="container">
            <div className="card">
                <div className={className}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <CountUp
                            start={0}
                            end= {Number(text)}
                            duration={2.5}
                            separator=","
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}
