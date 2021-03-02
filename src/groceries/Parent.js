import React, { Component } from 'react'
import { v4 as makeID } from "uuid"
import Child from "./Child"
import GC from "./GrandChild"
export class Parent extends Component {

  state = {
    todoList: [
      {
        id: makeID(),
        product: "Cheesecake",
        isDone: false
      }
    ],
    inputProduct: ""
  }

  handleSubmitProduct = (event) => {
    event.preventDefault();
    let newTodoArray = [
      ...this.state.todoList,
      { id: makeID(), product: this.state.inputProduct, isDone: false }
    ];

    this.setState({
      todoList: newTodoArray,
      inputProduct: ""
    })
  }

  handleOnChange = (event) => {
    this.setState({
      inputProduct: event.target.value,
    });
  }

  handleDeleteByID = (id) => {
    console.log("testing123");
    let filteredArr = this.state.todoList.filter(item => item.id !== id)

    this.setState({
      todoList: filteredArr,
    })
  }

  handleIsDone = () => {
    
  }  

  render() {
    return (
      <div className="parent-container">
        <Child
          handleSubmitProduct={this.handleSubmitProduct}
          handleOnChange={this.handleOnChange}
          inputTodo={this.state.inputProduct}
        />
        <GC
          todoList={this.state.todoList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
        />
      </div>
    )
  }
}

export default Parent
