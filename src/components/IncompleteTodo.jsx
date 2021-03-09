import React from 'react'

export const IncompleteTodo = (props) => {
  const { incompleteTodo, onClickComplete, onClickDelete } = props
  return(
    <div className="incomplete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      {incompleteTodo.map((todo, index) => {
        return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button className="complete-button" onClick={() => onClickComplete(index)}>完了</button>
            <button className="delete-button" onClick={() => onClickDelete(index)}>削除</button>
          </div>
        )
      })}
    </ul>
  </div>
  )
}
