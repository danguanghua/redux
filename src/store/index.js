import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const  sagaMiddleWare = createSagaMiddleware();
//redux-thunk 配置流程
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancer(applyMiddleware(thunk))
const enhancer = composeEnhancer(applyMiddleware(sagaMiddleWare));
const store = createStore(reducer, enhancer);
sagaMiddleWare.run(mySaga);
export default store;

//store 必须是唯一的， 多个store是坚决不允许，只能有一个store空间
//只有store能改变自己的内容， reducer不能改变
//reducer必须是纯函数

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


