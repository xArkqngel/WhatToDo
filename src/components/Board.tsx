import { BoardType } from "@/types/types";
import { Separator } from "./ui/separator";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import { Plus } from "lucide-react";

interface BoardProps {
  board: BoardType;
}

function Board({ board }: BoardProps) {
  return (
    <>
      <div className="w-full h-20 flex items-center p-4">
        <h2 id="board-title" className="font-semibold text-xl">
          {board.title}
        </h2>
      </div>
      <Separator />
      <div
        id="board-content"
        className="flex flex-row gap-4 p-4 overflow-x-scroll h-full w-full"
      >
        {board.lists.map((list) => (
          <div
            key={list.id}
            className="p-4 h-fit bg-primary rounded-lg text-primary-foreground"
          >
            <div className="flex flex-col gap-2">
              <h3>{list.title}</h3>
              <Separator />
              <div id={`list-${list.id}-task`} className="flex flex-col gap-2">
                {list.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-1 bg-muted rounded-md text-foreground"
                  >
                    <h4>{task.title}</h4>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <BoardWrapper id={`options-list-${list.id}`}>
                  <div className="flex gap-4 justify-between items-center w-full">
                    <h4>Añadir tarea</h4>
                    <BoardOptions>
                      <Plus size={20} />
                    </BoardOptions>
                  </div>
                </BoardWrapper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
