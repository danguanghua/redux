import React from 'react';
import {createRoot} from 'react-dom/client';
// import  ReactDOM  from 'react';
import './index.css';
import TodoList from './TodoList';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoList/>); 

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


