"use client";
import { BoardType, Theme, ListType } from "@/types";
import { Separator } from "./ui/separator";
import { Ellipsis, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import List from "./List";
import { themes } from "@/consts";
import DropdownMenuOptions from "./DropdownMenuOptions";
import { useBoardsStore } from "@/utils/board";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useRouter } from "next/navigation";
import DialogAddList from "./DialogAddList";

interface BoardProps {
  params: {
    id: string;
  };
}

export type ThemeOptionType = {
  id: Theme;
  component: JSX.Element;
};

function Board({ params }: BoardProps) {
  const { boards, updateBoard, removeBoard } = useBoardsStore()
  const boardId = params.id
  const [board, setBoard] = useState<BoardType>(boards.find(board => board.id === boardId)! || {})
  const [title, setTitle] = useState<string>(board.title || '')
  const [theme, setTheme] = useState<Theme>(board.theme || 'none')
  const [remove, setRemove] = useState<boolean>(false)
  const [drag, setDrag] = useState<boolean>(false)
  const navigate = useRouter()
  const [listsParent, lists, setLists] = useDragAndDrop<HTMLDivElement, ListType>(
    board.lists,
  )

  useEffect(() => {
    const newBoard = {
      ...board,
      title,
      theme
    }
    setBoard(newBoard)
    updateBoard(newBoard)
  }, [title, theme])

  useEffect(() => {
    updateBoard({
      ...board,
      lists
    })
  }, [lists])

  useEffect(() => {
    if (!remove || !boardId) return
    navigate.push('/')
    setTimeout(() => {
      removeBoard(boardId)    
    }, 100);
  }, [remove])

  useEffect(() => {
    setTitle(board.title)
    setTheme(board.theme)
    setLists(board.lists)
  }, [board])

  useEffect(() => {
    setBoard(boards.find(board => board.id === boardId)!)
  }, [boardId, boards])
  
  return (
    <section className="w-full h-full bg-cover relative overflow-hidden">
      <div className=" w-screen h-full absolute">
        {themes.find((themeOption) => themeOption.id === theme)?.component}
      </div>
      <div className="absolute top-0 left-0 w-full h-[calc(100vh-9.2rem)]">
        <div className="w-full h-20 flex items-center justify-between p-4 bg-slate-800 bg-opacity-80 text-muted">
          <h2 id="board-title" className="pl-2 font-semibold text-xl">
            {title}
          </h2>
          <div className="flex">
            <DropdownMenuOptions
              type="board"
              setTheme={setTheme}
              setTitle={setTitle}
              setRemove={setRemove}
            >
              <div className="flex items-center p-1 hover:bg-slate-400 hover:bg-opacity-40 rounded-sm cursor-pointer">
                <Ellipsis size={24} />
              </div>
            </DropdownMenuOptions>
          </div>
        </div>
        <Separator />
        <div
            id="board-content"
            className="flex gap-4 p-4 overflow-x-scroll h-full w-full"
          >
            <div
              ref={listsParent}
              className="flex gap-4"
            >
              {lists.map(list => (
                <List key={list.id} dragStatus={drag} setDragStatus={setDrag} list={list} boardName={board.title} />
              ))}
            </div>

            <DialogAddList boardId={board.id}>
              <div
                id="add-list"
                className="min-w-52 h-fit bg-primary rounded-lg p-4 flex justify-between text-primary-foreground hover:opacity-50 cursor-pointer gap-2"
              >
                <h3 className="font-semibold">Añadir lista</h3>
                <Plus />
              </div>
            </DialogAddList>
          </div>
      </div>
    </section>
  );
}

export default Board;
