import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, todos, View, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Task = (props) => (
    <TodoListContainer>
        <Icon 
        name={ props.checked ? "check" : "square"}
        size={30} 
        color="red"
        style={{ marginLeft: 2 }}
        onPress={props.setChecked}/>
        {props.checked?
        <Strikethrough>{props.text}</Strikethrough>:
        <RegularText>{props.text}</RegularText>
        }
    <Text >
            <View>
                {props.text}
                </View>
    </Text>
        ID: {props.id} - {props.text} - is checked = {props.checked ? "check":"not"}
        <Icon 
            name="trash" 
            size={30} 
            color="red"
            style={{ marginLeft: "auto" }}
            onPress={props.delete}/>
    </TodoListContainer>
);

const RegularText=styled.Text`
    color:black;
    font-size:14px;
    width:100%;
    display:flex;
    
`;
const Strikethrough = styled.Text`
text-decoration: line-through;
`
const taskStyle = StyleSheet.create({
    task:{
borderColor:"black",
borderWidth:3,
width:300
    }
})
export default Task;