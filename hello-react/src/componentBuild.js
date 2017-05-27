import React, { Component } from 'react';

class Title extends Component {
  handleClickOnTitle (e) {
    console.log(e.target.innerHTML);
    console.log(this);
  }

  render () {
    return (
        <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小数</h1>
    )
  }
}

class Header extends Component  {
  render () {
    return (
        <div>
          <Title ></Title>
          <h2>这里是header</h2>
        </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
        <div>
          <h2>this is the mian content!</h2>
        </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
        <div>
          <h2>this is footer!</h2>
        </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
        <div>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
    )
  }
}

export default Index;
