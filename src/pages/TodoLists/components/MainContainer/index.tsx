import TodoAddButton from "../TodoAddButton";
import TodoListContainer from "../TodoListContainer"
import styles from './MainContainer.module.css';




function MainContainer() {
  
  return (
    <div className={styles.maincontainer}>
      <p className={styles.maintitle}>TODO 리스트</p>
      <TodoListContainer></TodoListContainer>
      <TodoAddButton></TodoAddButton>
    </div>
  )
}

export default MainContainer
