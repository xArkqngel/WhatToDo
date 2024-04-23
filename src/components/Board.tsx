"use client";
import { BoardType, Theme } from "@/types/types";
import { Separator } from "./ui/separator";
import { Ellipsis, Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import List from "./List";
import {
  Lumiflex,
  Novatrix,
  Velustro,
  Opulento,
  Tranquiluxe,
  Zenitho,
} from "uvcanvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface BoardProps {
  board: BoardType;
}

const themes = {
  lumiflex: <Lumiflex />,
  novatrix: <Novatrix />,
  velustro: <Velustro />,
  opulento: <Opulento />,
  tranquiluxe: <Tranquiluxe />,
};

function Board({ board }: BoardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(board.theme);

  return (
    <section className="w-full h-full bg-cover relative">
      {themes[theme] && themes[theme]}
      <div className="absolute top-0 left-0 w-full h-[calc(100vh-9.2rem)]">
        <div className="w-full h-20 flex items-center justify-between p-4 bg-slate-800 bg-opacity-80 text-muted">
          <h2 id="board-title" className="font-semibold text-xl">
            {board.title}
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-1 cursor-pointer hover:bg-muted-foreground rounded-sm inline-flex">
                <Ellipsis size={24} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Board</DropdownMenuLabel>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
                Change theme
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator />
        <div
          id="board-content"
          className="flex flex-row gap-4 p-4 overflow-x-scroll size-full"
        >
          {board.lists.map((list) => (
            <List
              key={`board-${list.id}-key`}
              list={list}
              boardName={board.title}
            />
          ))}
          <div
            id="add-list"
            className="min-w-52 h-10 flex items-center justify-between cursor-pointer p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            <span className="ml-2">Añadir lista</span>
            <Plus size={20} />
          </div>
        </div>
      </div>
      <ThemeMenu
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        setTheme={setTheme}
      />
    </section>
  );
}

const ThemeMenu = ({
  open,
  setOpen,
  setTheme,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<Theme>>;
}) => {
  const handleClick = (e: any) => {
    const target = e.target as HTMLElement;
    if (target.id) {
      setTheme(target.id as Theme);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change theme</DialogTitle>
          <DialogDescription asChild>
            <div className="flex justify-center flex-wrap pt-4">
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Opulento />
                <div
                  id="opulento"
                  onClick={handleClick}
                  className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"
                ></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Tranquiluxe />
                <div
                  id="tranquiluxe"
                  onClick={handleClick}
                  className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"
                ></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Lumiflex />
                <div
                  id="lumiflex"
                  onClick={handleClick}
                  className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"
                ></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Velustro />
                <div
                  id="velustro"
                  onClick={handleClick}
                  className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"
                ></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Novatrix />
                <div id="novatrix"
                  onClick={handleClick} className="absolute top-0 left-0 size-full hover:bg-slate-200 hover:bg-opacity-80"></div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button
              className="p-2 bg-destructive hover:bg-red-600 text-primary-foreground rounded-md"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Board;
