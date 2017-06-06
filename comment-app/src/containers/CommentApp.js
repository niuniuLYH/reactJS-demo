import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {

    render () {
        // let { comments } = this.state;
        return (
            <div className="wrapper">
                {/**这里的CommentApp是CommentInput的父组件，父组件通过props给子组件传递一个回调函数**/}
                <CommentInput/>
                <CommentList/>
            </div>
        )
    }
}

export default CommentApp;