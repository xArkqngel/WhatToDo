"use client"

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Separator } from "@/components/ui/separator";
import Board from "@/components/Board";

const board = {
  id : "1",
  title: "Board title",
  content: "Board content",
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
          title: "Task title2"
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
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <div id="header">
        <Header />
      </div>

      <main className="flex h-screen">
        <div className="basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <Aside />
        </div>
        <Separator orientation="vertical" />
        <div id="content" className="basis-2/3 lg:basis-3/4 xl:basis-4/5">
          <Board board={board}/>
        </div>
      </main>
    </>
  );
}
