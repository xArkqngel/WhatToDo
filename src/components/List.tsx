import { ListType, TaskType } from "@/types/types"
import { Separator } from "./ui/separator"
import BoardWrapper from "./BoardWrapper"
import BoardOptions from "./BoardOptions"
import { Plus } from "lucide-react"
import Task from "./Task"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
import { animations } from "@formkit/drag-and-drop"

interface ListProps {
    list : ListType
    boardName : string
}

function List({ list, boardName} : ListProps) {

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, TaskType>(
    list.tasks,
    {
      group: boardName,
      plugins: [
        animations()
      ]
    }
  )

    return (
        <div
            key={list.id}
            className="p-4 h-fit bg-primary rounded-lg text-primary-foreground"
          >
            <div className="flex flex-col gap-2">
              <h3>{list.title}</h3>
              <Separator />
              <ul ref={todoList} id={`list-${list.id}-task`} className="flex flex-col gap-2">
                {todos.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </ul>
              <div className="mt-2">
                <BoardWrapper id={`options-list-${list.id}`}>
                  <div className="flex gap-4 justify-between items-center w-full">
                    <h4>Añadir tarea</h4>
                    <BoardOptions className="p-0">
                      <Plus size={20} className="hover:text-primary w-full h-full p-1"/>
                    </BoardOptions>
                  </div>
                </BoardWrapper>
              </div>
            </div>
          </div>
    )
}

export default List