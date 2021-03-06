import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComments, deleteComment } from '../reducers/comments'

class CommentListContainer extends Component {
    static propTypes  = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    };

    componentWillMount () {
        this._loadComments();
    }

    _loadComments () {
        console.log(this.props);
        // 从 LocalStorage 中加载评论
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : [];
        // this.props.initComments 是 connect 传进来的
        // 可以帮我们把数据初始化到 state 里面去
        this.props.initComments(comments);
    }

    handleDeleteComment (index) {
        const {comments} = this.props;
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ];
        localStorage.setItem('comments',JSON.stringify(newComments));
        if(this.props.deleteComment) {
            // this.props.onDeleteComment 是 connect 传进来的
            // 会 dispatch 一个 action 去删除评论
            this.props.deleteComment(index)
        }
    }

    render () {
        return (
            <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment.bind(this)}></CommentList>
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
        // 提供给 CommentListContainer
        // 当从 LocalStorage 加载评论列表以后就会通过这个方法
        // 把评论列表初始化到 state 当中
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        deleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
};

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);