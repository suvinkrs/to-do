import "./styles.css"

export default function App() {
  return (
    <div>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Add</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
            Item 2
          </label>
          <button className="btn btn-danger">Add</button>
        </li>
      </ul>
    </div>
  )
}