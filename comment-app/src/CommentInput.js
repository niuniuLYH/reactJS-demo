import React,{ Component } from 'react';

class CommentInput extends Component {
    constructor () {
        super();
        this.state = {
            username:'',
            content:''
        }
    }

    handleUsernameChange (e) {
        this.setState( {
            username: e.target.value
        })
    }

    handleContentChange (e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit () {
        {/**当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。**/}
        if(this.props.onSubmit) {
            const { username, content } = this.state;
            {/**在这里调用了父组件的通过props传递过来的回调函数onSubmit方法，并且把得到的数据通过参数的形式传递给该方法**/}
            this.props.onSubmit({username,content});
        }
        this.setState({
            content: ''
        })
    }

    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容： </span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;
