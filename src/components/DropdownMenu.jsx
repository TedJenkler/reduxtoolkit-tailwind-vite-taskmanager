import { useSelector } from "react-redux"
import boards from "../features/boards/boards"
import boardIcon from "../assets/boardIcon.png"

const DropdownMenu = () => {
    const boards = useSelector((state) => state.board.boards)
    console.log(boards)
    return (
        <div className="">
            <h1>All BOARDS({boards.length})</h1>
            {boards.map((board, index) => {
                return (
                    <div
                    className={`flex items-baseline space-x-2 px-5 py-4 ${board.isActive && "bg-[#635fc7] rounded-r-full text-white mr-8"}`}
                    key={index}
                    >
                    <img src={boardIcon} alt="boardicon" className="h-4" />
                    <p className="text-lg font-bold">{board.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DropdownMenu