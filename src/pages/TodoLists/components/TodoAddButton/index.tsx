import { TODOTask } from "../TodoListContainer"
import styles from "./TodoAddButton.module.css"

interface TodoAddButtonProps {
    addTask: (newTask: TODOTask) => void
} 

function TodoAddButton(props :TodoAddButtonProps) {
  
  return (
    <>
      <button className={styles.todoaddbutton} onClick={() => props.addTask({id: Date.now(), name: "새로운 할일"})}>추가하기</button>
    </>
  )
}

export default TodoAddButton
