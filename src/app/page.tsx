"use client"

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Separator } from "@/components/ui/separator";
import Board from "@/components/Board";
import { Novatrix } from "uvcanvas";

const board = {
  id : "1",
  title: "Board title",
  content: "Board content",
  theme: "novatrix",
  lists: [
    {
      id: "1",
      title: "List title",
      tasks: [
        {
          id: "1",
          title: "Task title"
        },
        {
          id: "2",
          title: "Task 2"
        },
        {
          id: "3",
          title: "Task title3"
        }	
      ]
    },
    {
      id: "2",
      title: "List title",
      tasks: [
        {
          id: "1",
          title: "Task title"
        },
        {
          id: "2",
          title: "Task title"
        },
        {
          id: "3",
          title: "Task title"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div id="header">
        <Header />
      </div>

      <main className="flex h-screen">
        <div className="w-1/3 lg:w-1/4 xl:w-1/5">
          <Aside />
        </div>
        <Separator orientation="vertical" />
        <div id="content" className="w-2/3 lg:w-3/4 xl:w-4/5">
          <Board board={board}/>
        </div>
      </main>
    </div>
  );
}
