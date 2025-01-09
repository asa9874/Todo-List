import styles from "./Todo.module.css"



function Todo() {
  
    return (
      <tr>
        <th><input type="checkbox" className={styles.todocheckbox}/></th>
        <th>공부하기!!!!</th>
        <th>
          <button className={styles.tododeletebutton}></button>  
          <button className={styles.todomodifybutton}></button>
        </th>
      </tr>
    )
  }
  
export default Todo