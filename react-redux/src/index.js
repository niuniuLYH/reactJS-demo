import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import UsersList from './Users';
import Header from './containers/Header'
import Content from './containers/Content'
import './index.css'

const themeReducer = (state, action) => {
    if(!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor};
        default:
            return state;
    }
};

const store = createStore(themeReducer);

class Index extends Component {

    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={ store }>
        <Index />
    </Provider>,
    document.getElementById('root')
);


/**users相关功能***************************************/
// const usersReducer = (state, action) => {
//     if(!state) {
//         return [{
//             username: 'hahaha',
//             age: 23,
//             gender: 'male'
//         }];
//     }
//     switch (action.type) {
//         case 'ADD_USER':
//             return [...state, action.user];
//         case 'DELETE_USER':
//             return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
//         case 'UPDATE_USER':
//             return [...state.map((value,key) => {
//                 if(key === action.index){
//                     return {...value, ...action.user}
//                 }else {
//                     return value;
//                 }
//             })];
//         default:
//             return state;
//     }
// };
//
// const store = createStore(usersReducer);
//
// ReactDOM.render(
//     <Provider store={ store }>
//         <UsersList />
//     </Provider>,
//     document.getElementById('root')
// );