import React from 'react'

export const CompleteTodo = (props) => {
  const { completeTodo, onClickBack} = props
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
      {completeTodo.map((todo, index) => {
        return(
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button className="back-btn" onClick={() => onClickBack(index)}>戻す</button>
          </div>
          )
        })}
      </ul>
    </div>      
  )
}