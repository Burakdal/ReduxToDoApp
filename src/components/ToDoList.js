import React from 'react';
import {View,FlatList,Text,TouchableOpacity} from 'react-native';



const ToDoList=({todos,toggleToDo})=>{
    return(
        <View>
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item})=>
                    (
                        <TouchableOpacity onPress={()=>{toggleToDo(item.id)}}>
                            <Text
                                style={{
                                    textDecorationLine:item.complated ? "line-through" : "none",
                                    fontSize:24,
                                    textAlign:'center'
                                }}
                            >
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            /> 
        </View>
    )

}
export default ToDoList;