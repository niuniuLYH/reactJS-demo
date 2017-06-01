import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };

    constructor () {
        super();
        this.state = {
            username:'',
            content:''
        }
    }

    componentWillMount () {
        this._loadUsername();
    }

    componentDidMount () {
        this.textarea.focus();
    }

    _saveUsername (username) {
        localStorage.setItem('username', username);
    }

    _loadUsername () {
        const username = localStorage.getItem('username');
        if(username) {
            this.setState({username});
        }
    }

    handleSubmit () {
        {/**当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。**/}
        if(this.props.onSubmit) {
            const { username, content } = this.state;
            {/**在这里调用了父组件的通过props传递过来的回调函数onSubmit方法，并且把得到的数据通过参数的形式传递给该方法**/}
            this.props.onSubmit({username,content,createdTime: +new Date()});
        }
        this.setState({
            content: ''
        })
    }

    handleUsernameBlur (event) {
        this._saveUsername(event.target.value);
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

    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容： </span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} ref={(textarea) => this.textarea = textarea} onChange={this.handleContentChange.bind(this)} />
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
