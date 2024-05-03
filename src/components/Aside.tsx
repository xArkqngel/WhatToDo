import { Ellipsis, FolderKanban, Plus, Pencil } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";
import SetUserName from "./SetUserName";
import { useUserStore } from "@/utils/user";
import { useBoardsStore } from "@/utils/board";
import DialogAddBoard from "./DialogAddBoard";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function Aside() {
  const { user } = useUserStore();
  const { boards } = useBoardsStore();

  const activeSegment = useSelectedLayoutSegment();

  return (
    <aside id="aside" className="h-full w-full bg-slate-100 ">
      <div id="name" className="flex items-center pl-4 h-20">
        <Avatar>
          <div className="w-full h-full bg-foreground text-background flex items-center justify-center font-medium text-2xl">
            {user && user?.length > 0 && user[0].toUpperCase()}
          </div>
        </Avatar>
        <div className="p-4 flex flex-col">
          <BoardWrapper id="edit-name">
            <h2 className="text-xl font-bold">{user}</h2>
            <BoardOptions>
              <SetUserName>
                <Pencil size={12} />
              </SetUserName>
            </BoardOptions>
          </BoardWrapper>
          <span className="text-xs italic">Free</span>
        </div>
      </div>

      <Separator />

      <div id="boards">
        <div id="title" className="p-4">
          <BoardWrapper id="0">
            <div className="flex items-center gap-2">
              <FolderKanban />
              <h2 className="font-bold">Boards</h2>
            </div>
            <BoardOptions>
              <DialogAddBoard>
                <Plus size={20} />
              </DialogAddBoard>
            </BoardOptions>
          </BoardWrapper>
        </div>
        <div className="w-3/4 pl-4">
          <Separator />
        </div>
        <div id="boards-container" className="flex flex-col py-4">
          {boards.map((board) => (
            <div key={board.id} className="hover:bg-slate-300 hover:bg-opacity-60">
              <BoardWrapper key={board.id} id={board.id}>
              <Link href={`/board/${board.id}`}  className={activeSegment === board.id ? 'px-4 py-1 w-full h-full bg-slate-300 bg-opacity-60' : 'px-4 py-1 w-full h-full'}>

                <h3 className="text-sm">{board.title}</h3>
              </Link>
              </BoardWrapper>
            
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Aside;
