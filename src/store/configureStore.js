import { createStore, combineReducers } from 'redux'
import categoryReducer from '../reducers/categories'



const configureStore = () => {

    const store = createStore(combineReducers({
        category: categoryReducer
    }))

    return store

}

export default configureStore