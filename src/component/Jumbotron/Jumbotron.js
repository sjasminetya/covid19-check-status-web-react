import React from 'react'
import styles from './Jumbotron.module.css'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'

export default function Jumbotron() {
    const history = useHistory()
    const routeOverview = () => {
        history.push('/overview')
    }
    return (
        <div className="jumbotron bg-dark">
            <div className="container mt-5 text-white">
                <h1 className={styles.corona}>Coronavirus Information</h1>
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                <p>Source: www.who.int</p>
                <Button title="Check Status Coronavirus in the world" type="submit" className={styles['btn-world']} click={routeOverview} />
            </div>
            {/* <a href='https://www.freepik.com/vectors/infographic'>Infographic vector created by pch.vector - www.freepik.com</a> */}
        </div>
    )
}
