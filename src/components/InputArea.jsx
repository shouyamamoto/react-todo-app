import React from 'react'

export const InputArea = (props) => {
  const { inputTodo, onChangeTodoText, onClickAdd }  = props
  return (
    <div className="input-area">
      <input type="text" placeholder="TODOを入力" value={inputTodo} onChange={onChangeTodoText}/>
      <button id="add-button" onClick={onClickAdd} >追加</button>
    </div>
  )
}