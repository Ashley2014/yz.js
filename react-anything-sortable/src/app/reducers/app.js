import indexData from './index'

var reduxFormReducer=ReduxForm.reducer

export default Redux.combineReducers({
    indexData,
 	form: reduxFormReducer,

})