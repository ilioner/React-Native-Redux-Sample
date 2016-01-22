/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './App/containers/App';
import reducerFunction from './App/reducers/Reducers';

/*
导入redux所需组件
 */
import {createStore} from 'redux';
import {Provider} from 'react-redux/native';


/*
使用reducer创建store
 */
let store = createStore(reducerFunction);
class Redux_project extends Component {
  render() {
    
    return (
        /*
        传递store到全局
         */
      <Provider store = {store}>
        {()=> <App/>}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Redux_project', () => Redux_project);
