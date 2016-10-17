
export default (state = {
    isFetching: false,
    data: null
}, action) => {
    switch(action.type) {
        case 'REQUEST_ACCOUNT_DATA':
            return _.assign({}, state, {
                isFetching: true,
            })
        case 'RECEIVE_ACCOUNT_DATA':
            return _.assign({}, state, {
                isFetching: false,
                data: action.data,
            })
        default:
            return state
    }
}

