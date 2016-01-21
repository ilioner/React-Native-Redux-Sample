/**
 * Created by Tywin on 16/1/20.
 */
'use strict';
import React from 'react-native';


const { Component, View, Text,StyleSheet } = React;
import SearchBar from '../components/SearchBar';
import TaskList from '../components/TaskList';
import Item from '../models/Item';



/*
引入redux所需组建
 */

import {connect} from 'react-redux/native';
/*
引入action
 */
import {addTodo} from '../actions/Actions';

class App extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 自定义方法
    handle() {

    }

    _onSearchBarClick(text){
        console.log("_onSearchBarClick===>"+text)
        /*
        使用dispatch(action)绑定事件,交给reducer处理
         */
        let itemObj = Object.create(Item);
        itemObj.itemTitle = text;
        itemObj.createTime = new Date().toLocaleString();
        this.props.dispatch(addTodo(itemObj));

    }

    // 渲染
    render() {
        //通过connect()注入 dispatch
        const {
            dispatch,
            taskItems
            } = this.props;
        return (
            <View style = {styles.contentStyle}>
               <SearchBar onClickAdd={this._onSearchBarClick.bind(this)}/>
                <TaskList taskItems = {this.props.taskItems}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textDefault:{
        fontSize:20
    },
    contentStyle:{
        flex:1
    }

});

/*
使用基于全局的state  包装我们所需的props
 */
function select(state){
    return {
        taskItems:state.todoItem
    };
}

//包装component 该组建可默认使用store 注入dispatch和state到其默认的connect(select)(App)中
export default connect(select)(App);
