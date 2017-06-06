/**
 * 环境中已经注入了 React-redux，你可以直接使用 connect，或者 ReactRedux.connect
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//
// const usersReducer = (state, action) => {
//     if(!state) {
//         return [];
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

class User extends Component {

    handleDeleteUser (index) {
        if(this.props.deleteUser){
            this.props.deleteUser(index);
        }
    }

    render () {
        const { user, index } = this.props;
        return (
            <div>
                <div>Name: {user.username}</div>
                <div>Age: {user.age}</div>
                <div>Gender: {user.gender}</div>
                <button onClick={this.handleDeleteUser.bind(this, index)}>删除</button>
            </div>
        )
    }
}

class UsersList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            age: '',
            gender: 'male'
        }
    }

    handleAddUser (user) {

        if(this.props.addUser) {
            this.props.addUser(user);
        }
    }

    render () {
        const {users, deleteUser} = this.props;
        const {username, age, gender} = this.state;
        return (
            <div>
                {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' value={username} onChange={(e) => this.setState({username: e.target.value})} /></div>
                    <div>Age: <input type='number' value={age} onChange={(e) => this.setState({age: parseInt(e.target.value)})} /></div>
                    <div>Gender:
                        <label>Male: <input type='radio' name='gender' value='male' checked={!!(gender === 'male')} onChange={e => this.setState({gender: 'male'})} /></label>
                        <label>Female: <input type='radio' name='gender' value='female' checked={!!( gender === 'female')} onChange={e => this.setState({gender: 'female'})} /></label>
                    </div>
                    <button onClick={this.handleAddUser.bind(this, this.state)}>增加</button>
                </div>
                {/* 显示用户列表 */}
                <div className='users-list'>{
                    users && users.map((value, key) => {
                        return (
                            <User user={value} deleteUser={deleteUser.bind(this)} key={key} index={key}></User>
                        )
                    }) }</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser : (user) => {
            dispatch({type: 'ADD_USER', user: user})
        },
        deleteUser: (index) => {
            dispatch({type: 'DELETE_USER', index: index})
        },
        // updateUser: (action) => {
        //   dispatch({type: 'UPDATE_USER', index: action.index, user: action.user})
        // }
    }
};

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersList;


