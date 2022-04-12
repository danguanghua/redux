import React, {Component} from 'react';
import store from './store/index'
import {changeInputaction, addItemaction, deleteItemaction,  getTodoList, getMyListaction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';
import './mock/test'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        // axios.get('/user')
        // .then((res) =>{
        //     console.log(res);
        //     const data = res.data;
        //     const action = getListaction(data);
        //     store.dispatch(action);
        // })


        // const action = getTodoList();
        // store.dispatch(action);

        const action = getMyListaction();
        store.dispatch(action);
        console.log(action);
    }
    clickBtn() {
        // console.log('dnddn');
        const action = addItemaction();
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState());
    }
    changeInputValue(e) {
        // console.log(e.target.value); 
        const action = changeInputaction(e.target.value);
        store.dispatch(action);
    }
    deleteItem(index) {
        // console.log(index);
        const action = deleteItemaction(index);
        store.dispatch(action);
    }
    render() {
        return(
            <TodoListUI 
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            />
        );
    }
}

export default TodoList;