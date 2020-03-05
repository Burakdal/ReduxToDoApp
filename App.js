/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react';
import ToDoApp from './src/TodoApp';
import store from './src/store/index';
import {Provider} from 'react-redux';
export default class App extends React.Component{

    render() {
      return (
        <Provider store={store}>
          <ToDoApp/>
        </Provider>
         
      );
    }
};

