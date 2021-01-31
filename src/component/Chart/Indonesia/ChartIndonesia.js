import React, { Component } from 'react'
import Doughnut from 'chart.js'
import {connect} from 'react-redux'
import {getData} from '../../../configs/redux/actions'

class ChartIndonesia extends Component {
    doughnutRef = React.createRef()

    async componentDidMount() {
        await this.props.getData()
        const myDoughnutRef = this.doughnutRef.current.getContext('2d')
            new Doughnut(myDoughnutRef, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Positive',
                        'Deaths',
                        'Recovered'
                    ],
                    datasets: [
                        {
                            data: [this.props.indonesia.positif, this.props.indonesia.meninggal, this.props.indonesia.sembuh],
                            backgroundColor: ['#82CDE5', '#B11E31', '#096344']
                        }
                    ]
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartIndonesia)