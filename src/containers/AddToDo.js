import React, { PureComponent } from 'react';
import { View,Text,TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addToDoAction} from '../actions/index';

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    addToDo=(textstate)=>{
        this.props.dispatch(addToDoAction(textstate));
        this.setState({text:''});
    }
    
    render() {
        return (
             <View style={{flexDirection:'row',marginHorizontal:20}}>
                 <TextInput
                    value={this.state.text}
                    onChangeText={(text)=>{
                        this.setState({text:text});
                    }}
                    placeholder="Add to do..."
                    style={{
                        backgroundColor:'#eaeaea',
                        borderWidth:1,
                        borderColor:'#f2f2e1',
                        padding:5,
                        height:50,
                        flex:1
                    }}
                 />
                 <TouchableOpacity onPress={()=>{
                     this.addToDo(this.state.text);
                 }}>
                     <View style={{height:50,backgroundColor:'#eaeaea',
                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Ionicons name="md-add" size={30} style={{color:'#de9595',padding:10}}/>
                     </View>
                     
                 </TouchableOpacity>
             </View>
        );
    }
}
export default connect()(AddToDo);
