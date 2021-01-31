const initialStateData = {
    indonesia: {
        meninggal: 0,
        sembuh: 0,
        positif: 0
    },
    province: []
}

const indonesiaReducer = (state = initialStateData, action) => {
    if (action.type === 'GET_DATA_INDONESIA') {
        return {
            ...state,
            indonesia: action.payload
        }
    } if (action.type === 'GET_DATA_PROVINCE') {
        return {
            ...state,
            province: action.payload
        }
    } else {
        return state
    }
    
}

export default indonesiaReducer