import React, { PureComponent } from 'react';
import { View } from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleToDos from "./containers/VisibleToDos";


class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            todos:[],
            visibilityFilter:'SHOW_ALL'
        }
    }
    render() {
        return (
             <View style={{flex:1,marginTop:20}}>
                 <AddToDo/>
                 <View style={{marginTop:50}}>
                     <VisibleToDos/>
                 </View>
             </View>
        );
    }
}

export default TodoApp;