
import {combineReducers,createStore,applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import { rootSaga} from "./AllSagas";
import  {reducerApi} from './reducers'



const reducer = combineReducers({
   reducerApi:reducerApi 

});

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer,applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export default store;