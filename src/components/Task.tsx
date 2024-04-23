import { TaskType } from "@/types/types";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import { Ellipsis } from "lucide-react";

interface TaskProps {
  task: TaskType;
}

function Task({ task }: TaskProps) {
  return (
    <BoardWrapper id={`task-${task.id}-id`} className ="p-2 bg-muted rounded-md text-primary shadow-sm shadow-slate-200">
        <div key={`task-${task.id}-key`} className="">
          <h4>{task.title}</h4>
        </div>
      <BoardOptions className="p-1 hover:bg-muted-foreground">
        <Ellipsis size={16} className="hover:text-primary w-full h-full p-1" />
      </BoardOptions>
    </BoardWrapper>
  );
}

export default Task;
