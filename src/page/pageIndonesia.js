import React, { Component } from 'react'
import Header from '../component/Header/Header'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import Footer from '../component/Footer/Footer'
import Doughnut from '../component/Chart/Indonesia/ChartIndonesia'
import Table from '../component/Table/TableProvinsi'
import Card from '../component/Card/Card'
import styles from './Overview/Overview.module.css'
import moment from 'moment'
import {getData} from '../configs/redux/actions'
import {connect} from 'react-redux'

class pageIndonesia extends Component {
    
    componentDidMount() {
        this.props.getData()
    }

    render() {
        console.log(this.props.indonesia)
        return (
            <div>
                <Header/>
                <Jumbotron/>
                <div className="container">
                    <h1>COVID-19 Indonesia Condition</h1>
                    <h4>Last Update at {moment(this.props.indonesia.lastUpdate).format("MMMM Do YYYY")}</h4>
                    <div className={styles['card-box']}>
                        <Card className={styles['total-cases']} title="Positive" text={this.props.indonesia.positif} />
                        <Card className={styles['total-death']} title="Deaths" text={this.props.indonesia.meninggal} />
                        <Card className={styles['total-recovered']} title="Recovered" text={this.props.indonesia.sembuh} />
                    </div>
                    <Doughnut/>
                    <br/>
                    <h4>Data COVID-19 Province Indonesia</h4>
                    <Table/>
                    <br/>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
}

function mapStateToProps(state) {
    return {
        indonesia: state.indonesia.indonesia
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(pageIndonesia)