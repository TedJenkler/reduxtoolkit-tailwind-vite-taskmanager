import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtask } from "../features/boards/boards"
import { v4 as uuidv4 } from 'uuid'
import ximg from "../assets/x.png"

const AddTask = ( {setToggleAdd, toggleAdd} ) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [newSubtask, setNewSubtask] = useState(
        [
            {isCompleted: false, title: '', id: uuidv4()},
            {isCompleted: false, title: '', id: uuidv4()},
        ]
    )
    const [status, setStatus] = useState(0)

    const onChange = (id, newValue) => {
        setNewSubtask((prevstate) => {
            const newState = [...prevstate]
            const subtask = newState.find((task) => task.id === id)
            subtask.title = newValue
            return newState
        })
    }

    const onDelete = (id) => {
        setNewSubtask( (perState) => perState.filter((el) => el.id !== id))
    }

    const dispatch = useDispatch()
    const board = useSelector((state) => state.board.boards)

    const handleStatus = (e) => {
            setStatus(e.target.value)
            if(status === "Todo"){
                setStatus(0)
            }
            else if(status === "Doing"){
                setStatus(1)
            }
            else if(status === "Done"){
                setStatus(2)
            }
            console.log(status)
    }

    return (
        <form onSubmit={(e) => {e.preventDefault()}} className="absolute w-11/12 bg-white mx-auto left-0 right-0 top-40 flex flex-col p-6">
            <h2 className="mb-6">Add New Task</h2>
            <label className="pl text-mediumgrey mb-2">Title</label>
            <input onChange={(e) => {setTitle(e.target.value)}} value={title} className="border-mediumgrey/25 border py-2 px-4 rounded mb-6" placeholder="e.g take coffee break"></input>
            <label className="pl text-mediumgrey mb-2">Description</label>
            <textarea onChange={(e) => {setDescription(e.target.value)}} value={description} className="h-28 border-mediumgrey/25 border py-2 px-4 rounded mb-6" placeholder="e.g. It’s always good to take a break. This
            15 minute break will  recharge the batteries a little."></textarea>
            <div className="w-full">
                <label className="pl text-mediumgrey">Subtasks</label>
                <div className="mt-2 mb-4">
                    {newSubtask.map((subtask, index) => {
                        return (
                            <div key={index}>
                                <input onChange={(e) => {
                                    onChange( subtask.id , e.target.value )
                                }} value={subtask.title} className="border-mediumgrey/25 border py-2 px-4 rounded" placeholder="e.g. Drink coffee & smile"></input>
                                <button onClick={(e) => {
                                    onDelete(subtask.id)
                                }}><img src={ximg} alt="x" /></button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={(e) => {
                    setNewSubtask( (state) => [
                        ...state,
                        {isCompleted: false, title: '', id: uuidv4()},
                    ])
                }} className="bg-greywhite2 text-darkpurple py-2 w-full rounded-3xl mb-6"><p className="pl w-full">+ Add New Subtask</p></button>
                <div className="flex flex-col mb-6">
                    <label className="pl text-mediumgrey">Status</label>
                    <select onChange={handleStatus} value={status} placeholder="select">
                        {board[0].columns.map((column) => {
                            return (
                                <option>{column.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={() => dispatch(addtask({title: title, description: description, subtasks: newSubtask}), setToggleAdd(!toggleAdd))} className="bg-darkpurple text-white py-2 w-full rounded-3xl"><p className="pl">Create Task</p></button>
            </div>
        </form>
    )
}

export default AddTask