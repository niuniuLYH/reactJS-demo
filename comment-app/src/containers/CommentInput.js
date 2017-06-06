import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentInput  from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func,
    };

    constructor () {
        super();
        this.state = {
            username: '',
        }
    }

    componentWillMount () {
        this._loadUsername();
    }

    _saveUsername (username) {
        // 看看 render 方法的 onUserNameInputBlur
        // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
        localStorage.setItem('username', username);
    }

    _loadUsername () {
        // 从 LocalStorage 加载 username
        // 然后可以在 render 方法中传给 CommentInput
        const username = localStorage.getItem('username');
        if(username) {
            this.setState({username});
        }
    }

    handleSubmitComment (comment) {
        //评论数据的验证
        if(!comment) return;
        if(!comment.username) return alert('请输入用户名！');
        if(!comment.content) return alert('请输入评论内容');
        const {comments} = this.props;
        const newComment = [...comments, ...comment];
        console.log(newComment);
        localStorage.setItem('comments', JSON.stringify(newComment));
        {/**当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。**/}
        if(this.props.onSubmit) {
            {/**在这里调用了父组件的通过props传递过来的回调函数onSubmit方法，并且把得到的数据通过参数的形式传递给该方法**/}
            this.props.onSubmit(comment);
        }
    }

    render () {
        return (
            <CommentInput username={this.state.username} onUserNameInputBlur={this._saveUsername.bind(this)} onSubmit={this.handleSubmitComment.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);
