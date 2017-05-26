require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/tabStyle.css');

import React, { Component, PropTypes, cloneElement } from 'react';
//import ReactDom from 'react-dom';
import EventEmitter from 'events';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { Seq } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { Motion,spring } from 'react-motion';

import Tabs from './tabs.jsx';
//import CompCummu from './compCummu.jsx'
//import InputComponent1 from './inputComponent1.jsx'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        {/*<InputComponent1/>*/}
        {/*<CompCummu/>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
