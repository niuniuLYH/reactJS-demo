import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import ComponentBuild from './componentBuild.js'; //组件的组合、嵌套和组件树
import State from './state.js';//组件的state和setState
import Dog from './dogDemo.js';//不能摸的狗的demo
import Props from './props.js';//react的props属性的使用
import Computer from './computerAndScreen.js';//电脑和显示器的demo
import RenderList from './renderList.js';//react渲染列表
import PrintTitle from './printTitle.js';//打印章节标题的demo
import PercentageApp from './percentDemo.js';//百分比转换器demo
import LifeCycle from './lifeCycle.js';//一个时钟的demo
import ReactChildren from './reactChild.js';//react的children属性
import ReactStyle from './reactStyle.js';//react的style属性

//打印章节标题的demo所需的lessons
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
];

//import registerServiceWorker from './registerServiceWorker';
//import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

ReactDOM.render(<ReactStyle style={{color: 'blue',fontSize: '58px'}} />,document.getElementById('root'));
