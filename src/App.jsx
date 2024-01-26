import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Nav from './components/Nav'
import { useState } from "react"
import AddTask from './components/AddTask'

function App() {
  const test = useSelector((state) => state.board)
  console.log(test)
  const [toggleAdd, setToggleAdd] = useState(false)
  return (
    <>
      <Nav toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
      {toggleAdd === true ? <AddTask /> : null}
    </>
  )
}

export default App
