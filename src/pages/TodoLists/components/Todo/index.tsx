import { useState } from "react";
import { TODOTask } from "../TodoListContainer"
import styles from "./Todo.module.css"

interface TodoProps {
  task: TODOTask,
  deleteTask: (taskId: number) => void
  updateTask: (newTask: TODOTask) => void
}

function Todo(props: TodoProps) {
  const [isEditing, setIsEditing] = useState(false); 
  const [editedName, setEditedName] = useState(props.task.name);  

  function toggleEditMode() {
    if (isEditing) props.updateTask({ id: props.task.id, name: editedName });
    setIsEditing(!isEditing);
  }
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEditedName(event.target.value);
  }

    return (
      <tr>
        <th><input type="checkbox" className={styles.todocheckbox}/></th>
        <th className="taskname">
            {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={handleInputChange}
              className={styles.todoInput}
            />
          ) : (
            props.task.name
          )}
        </th>
        <th>
          <button className={styles.tododeletebutton} onClick={() => props.deleteTask(props.task.id)}></button>  
          <button className={styles.todomodifybutton} onClick={toggleEditMode}></button>
        </th>
      </tr>
    )
  }
  
export default Todo