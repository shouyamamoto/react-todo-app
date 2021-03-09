import React, { useState } from 'react'
import './App.css'
import { InputArea } from './components/InputArea'
import { IncompleteTodo } from './components/IncompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [incompleteTodo, setIncompleteTodo] = useState(['ああああ', 'いいいい'])
  const [completeTodo, setCompleteTodo] = useState(['うううう'])

  const onChangeTodoText = (event) => {setInputTodo(event.target.value)}

  const onClickAdd = () => {
    if(inputTodo) {
      const newIncompleteTodo = [...incompleteTodo, inputTodo]
      setIncompleteTodo(newIncompleteTodo)
      setInputTodo('')
    }
  }

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo] // incompleteTodoをコピーする
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]] // completeTodoを展開して、クリックされたTODOを結合する
    newIncompleteTodo.splice(index, 1) // コピーした配列からクリックされたTODOを削除
    setCompleteTodo(newCompleteTodo)
    setIncompleteTodo(newIncompleteTodo)
  }

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo]
    newTodo.splice(index, 1)
    setIncompleteTodo(newTodo)
  }

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo]
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]]
    newCompleteTodo.splice(index, 1)
    setIncompleteTodo(newIncompleteTodo)
    setCompleteTodo(newCompleteTodo)
  }

  return (
    <React.Fragment>
      <InputArea 
        inputTodo={inputTodo}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />

      <IncompleteTodo 
        incompleteTodo={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo 
        completeTodo={completeTodo}
        onClickBack={onClickBack}
      />      
    </React.Fragment>
  );
}

export default App;
