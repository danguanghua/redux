import React from "react";
// import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
//无状态组件
const TodoListUI = (props) => {
    return (
        <div style = {{margin:'20px'}}>
        <div>
            <Input 
                value = {props.inputValue}
                placeholder = {props.inputValue}
                style = {{width : '250px', marginRight : '10px'}} 
                onChange = {props.changeInputValue}
               
            />
            <Button type = "primary" onClick={props.clickBtn}>增加</Button>
        </div>
        <div style={{ margin : '20px', width : '300px'}}>
            <List 
                bordered
                dataSource={props.list}
                renderItem = {(item, index) => <List.Item onClick={()=>{
                    props.deleteItem(index)
                }}>{item}</List.Item>}
            
            />
        </div>
    </div>
    ) 
}


// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style = {{margin:'20px'}}>
//             <div>
//                 <Input 
//                     value = {this.props.inputValue}
//                     placeholder = {this.props.inputValue}
//                     style = {{width : '250px', marginRight : '10px'}} 
//                     onChange = {this.props.changeInputValue}
                   
//                 />
//                 <Button type = "primary" onClick={this.props.clickBtn}>增加</Button>
//             </div>
//             <div style={{ margin : '20px', width : '300px'}}>
//                 <List 
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem = {(item, index) => <List.Item onClick={()=>{
//                         this.props.deleteItem(index)
//                     }}>{item}</List.Item>}
                
//                 />
//             </div>
//         </div>
//         )
//     }
// }

export default TodoListUI;