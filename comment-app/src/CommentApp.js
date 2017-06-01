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

    componentWillMount () {
        this._loadComments();
    }

    _loadComments () {
        let comments = localStorage.getItem('comments');
        console.log(comments);
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({ comments })
        }
    }

    _saveComments (comments) {
        localStorage.setItem('comments',JSON.stringify(comments));
    }

    handleSubmitComment (comment) {
        if(!comment) return ;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content) return alert('请输入评论内容');

        const comments = this.state.comments;
        comments.push(comment);
        this.setState ({
            comments: comments
        });
        this._saveComments(comments);
    }

    handleDeleteComment(index) {
        console.log(index);
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments });
        this._saveComments(comments);
    }

    render () {
        let { comments } = this.state;
        return (
            <div className="wrapper">
                {/**这里的CommentApp是CommentInput的父组件，父组件通过props给子组件传递一个回调函数**/}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp;