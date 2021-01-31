import axios from 'axios'

export const getData = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}`)
    .then(res => {
        dispatch({type: 'GET_DATA_INDONESIA', payload: res.data})
    })
}

export const getProvince = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_API_COVID19_INDONESIA}/provinsi`)
    .then(res => {
        dispatch({type: 'GET_DATA_PROVINCE', payload: res.data})
    })
}