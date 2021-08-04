import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, 
  View, 
  ScrollView, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";
import PersistedState from 'use-persisted-state';
const useTodoListState = createPersistedState('todo-list');
import Task from './Task';
import { auto } from 'async';

export default function App() {
  
const [value, setValue] = useState('');
const [todoList, setTodos] = useTodoListState([]);
let addTodo = () =>{
  let newTodo={
    key:Date.now(),
    text:value,
    checked:false
  }
  setTodos([...todoList, newTodo]);
  setValue('');
};

let removeTodo = (id) =>{
  setTodos(todoList.filter((todo) =>{
      if (todo.key !== id) return true;
  }));
  };

  let checkTask =(id) =>{
    setTodos(todoList.map((todo) => {
      if (todo.key === id) {
        todo.checked = ! todo.checked;
      }
      return todo
    }))
    
  };
  return (
    <SafeAreaView style={appStyle.container}>
    {/* <SafeAreaView style={appstyle.container}>*/}
        <TodoListContainer >
          <TextInput
            style={appStyle.input}
            onChangeText={(value) => setValue(value)}
            placeholder="Type your todo..."
            value={value}
       />
        <TouchableOpacity onPress={()=>addTodo()}>
          <Icon 
            name="plus" 
            size={30} 
            color="red"
            style={{ marginLeft: "15" }}/>
        </TouchableOpacity>
         </TodoListContainer> 
      <ScrollView>

        {todoList.map((task) => (
            <Task 
            id={task.key} 
            key={task.key}
            text={task.text}
            checked={task.checked}
            delete={() => removeTodo(task.key)}
            setChecked={() => checkTask(task.key)}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const TodoContainer= styled.View
  margin:auto

const TodoListContainer = styled.View
  `font-size: 32px;`

  const Input=styled.TextInput `
  background-color:"lightblue",
  `

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    //new
    marginTop:120,
    marginBottom:120,
  },
    title:{
      fontSize:20
  
  },
  input:{
    backgroundColor:"blue",
    fontSize:35,
    borderColor:"black",
    borderWidth:4
  },
  text:{
    fontSize:35,
    color:"red"
  }

});
