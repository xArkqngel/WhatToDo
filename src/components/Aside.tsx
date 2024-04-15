import { Ellipsis, FolderKanban, Plus } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import BoardWrapper from "./BoardWrapper";
import BoardOptions from "./BoardOptions";


function Aside() {
    const name = "Aside";
    const boards = [
        {
            id: "1",
            title: "Tablero 1"
        },
        {
            id: "2",
            title: "Tablero xsd"
        }
    ]

  return (
    <aside id="aside" className="h-screen w-full bg-slate-100 ">
        <div id="name" className="flex items-center pl-4 h-20">
            <Avatar>
                <div className="w-full h-full bg-foreground text-background flex items-center justify-center font-medium text-2xl">
                    {name[0].toUpperCase()}
                </div>
            </Avatar>
            <div className="p-4 flex flex-col">
                <h2 className="font-medium text-xl">{name}</h2>
                <span className="text-xs italic">Gratis</span>
            </div>
        </div>

        <Separator/>

        <div id="boards">
            <div id="title" className="p-4">
                <BoardWrapper id="0">
                    <div className="flex items-center gap-2">
                        <FolderKanban/>
                        <h2 className="font-bold">Tableros</h2>
                    </div>
                    <BoardOptions>
                        <Plus size={20}/>
                    </BoardOptions>
                </BoardWrapper>
            </div>
            <div className="w-3/4 pl-4">
                <Separator/>
            </div>
            <div id="boards-container" className="flex flex-col py-4">
                {boards.map(board => (
                    <div key={board.id} className="px-4 py-1 hover:bg-slate-400">
                        <BoardWrapper key={board.id} id={board.id}>
                            <h3 className="text-sm">{board.title}</h3>
                            <BoardOptions>
                                <Ellipsis size={16}/>
                            </BoardOptions>
                        </BoardWrapper>
                    </div>
                ))}
            </div>
        </div>

    </aside>
  );
}

export default Aside;
