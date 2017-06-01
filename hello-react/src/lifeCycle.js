import React, { Component } from 'react'

class Clock extends Component {
    constructor () {
        super();
        this.state = {
           date: new Date()
        };
    }

    componentWillMount () {
        this.timer = setInterval ( () => {
            this.setState({date: new Date() })
        },1000)
    }

    componentDidMount () {
        clearInterval (this.timer);
    }

    render () {
        const {date} = this.state;
        return (
            <div>
               <h1>
                   <p>现在的时间是：</p>
                   {date.toLocaleTimeString()}
               </h1>
            </div>
        )
    }
}

class CycleIndex extends Component {
    constructor () {
        super();
        this.state = {
            isShowClock : true
        }
    }

    handleCycleChange() {
        this.setState ({isShowClock: !this.state.isShowClock})
    }

    render () {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleCycleChange.bind(this)}>显示或者隐藏时钟</button>
            </div>
        )
    }
}

export default CycleIndex;
