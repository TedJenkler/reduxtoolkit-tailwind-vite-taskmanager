import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const test = useSelector((state) => state.test)
  console.log(test)
  return (
    <>

    </>
  )
}

export default App
