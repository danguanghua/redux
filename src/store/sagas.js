import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {GET_MY_LIST} from './actionTypes';
import { getListaction } from './actionCreators';
import axios from 'axios';



function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // console.log('dandan');
    // axios.get('/user')
    // .then((res) =>{
    //     const data = res.data;
    //     console.log(data);
    //     const action = getListaction(data);
    //     put(action);
    // })
    const res = yield axios.get('/user');
    const action = getListaction(res.data);
    yield put(action);
}

export default mySaga;