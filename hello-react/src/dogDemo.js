import React, { Component } from 'react'

class Dog extends Component {
    constructor () {
        super();
        this.state = {
            isRunning: false,
            isBarking: false
        };
    }

    bark () {
        console.log('dog is barking!');
        this.setState ({
            isBarking: true
        });

        setTimeout( () => {
            this.setState ({
                isBarking: false
            })
        },3000);
    }

    run () {
        this.bark();
        console.log('dog is running!');
        this.setState ({
            isRunning: true
        });

        setTimeout( () => {
            this.setState ({
                isRunning: false
            })
        },2000);
    }

    render () {
        const {isRunning,isBarking} = this.state;
        return (
            <div>
                <div onClick= {this.run.bind(this)}>DOG</div>
                <div>{ isRunning ? 'the dog is running' : 'the dog stoped' }</div>
                <div>{ isBarking ? 'the dog is barking' : 'the dog stoped barking' }</div>
            </div>
        )
    }
}

export default Dog;
