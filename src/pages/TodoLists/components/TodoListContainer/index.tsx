import { useReducer } from "react";
import Todo from "../Todo"
import styles from "./TodoListContainer.module.css"
import TodoAddButton from "../TodoAddButton";

export interface TODOTask {
  id: number;
  name: string;
}

export interface State {
  tasks: TODOTask[];
}

export interface Action {
  type: 'ADD' | 'UPDATE'| 'DELETE' ;
  newTask?: TODOTask; 
  id?: number;
}

// reducer 함수 
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      if (action.newTask) {
        return { ...state, tasks: [...state.tasks, action.newTask] };
      }
      return state;

    case 'UPDATE':
      if (action.newTask) {
        return {...state,tasks: state.tasks.map((t) => (t.id === action.newTask!.id ? action.newTask! : t))};
      }
      return state;

    case 'DELETE':
      if (action.id !== undefined) {
        return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
      }
      return state;
    default:
      return state;
  }
}


function TodoListContainer() {
    const [state, dispatch] = useReducer(reducer, { tasks: [] });
    
    const addTask = (newTask: TODOTask) => {
      dispatch({ type: 'ADD', newTask });
    };

    const deleteTask = (taskId: number) => {
      dispatch({ type: 'DELETE', id: taskId });
    };

    const updateTask = (newTask: TODOTask) => {
      dispatch({ type: 'UPDATE', newTask });
    }

    return (
      <>
      <table className={styles.todolistcontainer}>
      {state.tasks.map(task => (
          <li key={task.id}>
            <Todo task={task} deleteTask={deleteTask} updateTask={updateTask}></Todo>
          </li>
        ))}

      </table>
      <TodoAddButton addTask={addTask}></TodoAddButton>
    </>
    )
  }
  
export default TodoListContainer
  