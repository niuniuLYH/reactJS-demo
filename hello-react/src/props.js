import React, { Component } from 'react'

/****
 * state 的主要作用是用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。
 * props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。
 * 以前一个组件是通过继承 Component 来构建，一个子类就是一个组件。而用函数式的组件编写方式是一个函数就是一个组件，你可以和以前一样通过 <HellWorld /> 使用该组件。不同的是，函数式组件只能接受 props 而无法像跟类组件一样可以在 constructor 里面初始化 state。你可以理解函数式组件就是一种只能接受 props 和提供 render 方法的类组件。
 */
class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    };

    constructor () {
        super();
        this.state = {
            isLiked: false
        };
    }

    handleClickOnButton () {
        this.setState ({
            isLiked: !this.state.isLiked
        })
    }

    /*那么怎么把 props 传进去呢？在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值*/
    /*props 不可变。但这并不意味着由 props 决定的显示形态不能被修改。组件的使用者可以主动地通过重新渲染的方式把新的 props 传入组件当中，这样这个组件中由 props 决定的显示形态也会得到相应的改变。*/
    render () {
        return (
            <button onClick={this.handleClickOnButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText}
            </button>
        )
    }
}

class Props extends Component {
    constructor () {
        super();
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickChange () {
        this.setState ({
            likedText: '取消',
            unlikedText: '点赞'
        })
    }

    render () {
        return (
            <div >
                <LikeButton likedText={this.state.likedText}
                            unlikedText={this.state.unlikedText}></LikeButton>
                <div>
                    <button onClick={this.handleClickChange.bind(this)}>
                        修改works
                    </button>
                </div>
            </div>
        )
    }
}

export default Props;
