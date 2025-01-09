import Todo from "../Todo"
import styles from "./TodoListContainer.module.css"


function TodoListContainer() {
  
    return (
    <table className={styles.todolistcontainer}>
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
    </table>
    )
  }
  
export default TodoListContainer
  