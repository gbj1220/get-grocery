import React, { Component } from 'react'
import "./GC.css"
class Child extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmitProduct} >
          <div className="mb-3" >
            <label htmlFor="exampleFormControlInput1"
              className="form-label">
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter grocery item"
              name="inputGroceries"
              onChange={this.props.handleOnChange}
              value={this.props.inputProduct}
            />
            
          </div>
          <button className="btn btn-primary mb-3"
            type="submit">Submit</button>
        </form>

    )
  }
}

export default Child




