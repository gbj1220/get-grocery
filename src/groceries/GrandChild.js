import React from 'react'
import "./Parent.css"
function GC(props) {
  return (
    <ul>
      {props.todoList.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li>{item.product}</li>{" "}
            <button onClick={() => props.handleIsDone(item.id)} className="btn btn-warning button-style ">Completed</button>
            <button onClick={() => props.handleDeleteByID(item.id)} className="btn btn-danger button-style" >Delete</button>
            <form>
            <input onClick={() => props.handleIsDone(item.id)} type="checkbox" id="grocery" name="testing" value="test"></input>
            </form>
            <br />
          </React.Fragment>
        )
      })}
    </ul>
  )

};


export default GC;
