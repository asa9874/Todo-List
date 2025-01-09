import TodoListContainer from "./components/TodoListContainer"



function TodoLists() {
  
  return (
    <div className="todoLists">
      <p className="mainTitle">TODO 리스트</p>
      <TodoListContainer></TodoListContainer>
      <button className="todoAddButton">추가하기</button>
    </div>
  )
}

export default TodoLists
