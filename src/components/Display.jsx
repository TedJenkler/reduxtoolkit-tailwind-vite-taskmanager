import { useSelector } from "react-redux"

const Display = () => {

    const state = useSelector((state) => state.board.boards)
    console.log()
    return (
        <div className="flex bg-slate-50 overflow-scroll gap-6 pt-6 px-5">
            <div className="flex flex-col gap-5">
            <p className="flex items-center gap-3"><span className="bg-turk h-4 w-4 rounded-full"></span>TODO({state[0].columns[0].tasks.length})</p>
            {Object.values(state[0].columns[0].tasks).map((task) => {
                return (
                <div className="bg-white rounded-lg w-72 h-24 flex flex-col justify-center px-4">
                    <h1 className="text-black">{task.title}</h1>
                    <p>0 of {task.subtasks.length} subtasks</p>
                </div>)
            })}
            </div>
            <div className="flex flex-col gap-5">
            <p className="flex items-center gap-3"><span className="bg-newpurple h-4 w-4 rounded-full"></span>TODO({state[0].columns[1].tasks.length})</p>
            {Object.values(state[0].columns[1].tasks).map((task) => {
                return (<div className="bg-white rounded-lg w-72 h-24 flex flex-col justify-center px-4">
                    <h1 className="text-black">{task.title}</h1>
                    <p>0 of {task.subtasks.length} subtasks</p>
                </div>)
            })}
            </div>
            <div className="flex flex-col gap-5">
            <p className="flex items-center gap-3"><span className="bg-newgreen h-4 w-4 rounded-full"></span>TODO({state[0].columns[2].tasks.length})</p>
            {Object.values(state[0].columns[2].tasks).map((task) => {
                return (<div className="bg-white rounded-lg w-72 h-24 flex flex-col justify-center px-4">
                    <h1 className="text-black">{task.title}</h1>
                    <p>0 of {task.subtasks.length} subtasks</p>
                </div>)
            })}
            </div>
        </div>
    )
}

export default Display