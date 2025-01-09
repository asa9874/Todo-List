


function Todo() {
  
    return (
      <tr>
        <th><input type="checkbox" className="todoCheckBox"/></th>
        <th>공부하기!!!!</th>
        <th>
          <button className="todoDeleteButton"></button>  
          <button className="todoModifyButton"></button>
        </th>
      </tr>
    )
  }
  
export default Todo