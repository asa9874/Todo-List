import { TODOTask } from "../TodoListContainer"
import styles from "./Todo.module.css"

interface TodoProps {
  task: TODOTask,
  deleteTask: (taskId: number) => void
  updateTask: (newTask: TODOTask) => void
}

function Todo(props: TodoProps) {
    return (
      <tr>
        <th><input type="checkbox" className={styles.todocheckbox}/></th>
        <th>{props.task.name}</th>
        <th>
          <button className={styles.tododeletebutton} onClick={() => props.deleteTask(props.task.id)}></button>  
          <button className={styles.todomodifybutton} onClick={() => props.updateTask({id: props.task.id, name: "공부하기!!!!"})}></button>
        </th>
      </tr>
    )
  }
  
export default Todo