import React, { Component } from 'react'
import styles from './Jumbotron.module.css'
import {Redirect} from 'react-router-dom'
import Button from '../Button/Button'

export default class Jumbotron extends Component {
    constructor (props) {
        super(props)
        this.state = {
            redirect: null
        }
    }
    render() {
        console.log(this.props)
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="jumbotron bg-dark">
                <div className="container mt-5 text-white">
                    <h1 className={styles.corona}>Coronavirus Information</h1>
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                    <p>Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
                    <p>The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </p>
                    <p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
                    <p>Source: www.who.int</p>
                    <Button title="Check Status Coronavirus in the world" type="submit" className={styles.world} click={() => this.setState({redirect: '/overview'})} />
                </div>
            </div>
        )
    }
}
