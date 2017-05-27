import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'

class  LikeButton extends Component {
    constructor () {
        super();
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        {/*setState 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。*/}
        {/*注意，当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。所以，一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数作为参数。*/}
        {/*这里还有要注意的是，当你调用 setState 的时候，React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。*/}
        console.log(this.state.isLiked);
        this.setState ({
            isLiked: !this.state.isLiked
        });
        console.log(this.state.isLiked);

        {/*这里就自然地引出了 setState 的第二种使用方式，可以接受一个函数作为参数。React.js 会把上一个 setState 的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象*/}
        this.setState((prevState) => {
            return { count: 0 }
        });
        this.setState((prevState) => {
            return { count: prevState.count + 1 }; // 上一个 setState 的返回是 count 为 0，当前返回 1
        });
        this.setState((prevState) => {
            return { count: prevState.count + 2 }; // 上一个 setState 的返回是 count 为 1，当前返回 3
        });
        // 最后的结果是 this.state.count 为 3
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                { this.state.isLiked ? '取消' : '点赞'}
            </button>
        )
    }
}

class State extends Component {
    render () {
        return (
            <div>
                <LikeButton></LikeButton>
            </div>
        )
    }
}

export default State;
