import React,{Component} from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';

class CommentApp extends Component {
    constructor () {
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment (comment) {
        let { comments } = this.state;
        if(!comment) return ;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');

        comments.push(comment);
        this.setState ({
            comments: comments
        });
    }

    render () {
        let { comments } = this.state;
        return (
            <div className="wrapper">
                {/**这里的CommentApp是CommentInput的父组件，父组件通过props给子组件传递一个回调函数**/}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={comments}/>
            </div>
        )
    }
}

export default CommentApp;