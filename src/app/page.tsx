"use client";

import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Theme } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/utils/user";
import SetUserName from "@/components/SetUserName";

const board = {
  id: "1",
  title: "Board title",
  content: "Board content",
  theme: "novatrix" as Theme,
  lists: [
    {
      id: "1",
      title: "List title",
      tasks: [
        {
          id: "1",
          title: "Task title",
        },
        {
          id: "2",
          title: "Task 2",
        },
        {
          id: "3",
          title: "Task title3",
        },
      ],
    },
    {
      id: "2",
      title: "List title",
      tasks: [
        {
          id: "1",
          title: "Task title",
        },
        {
          id: "2",
          title: "Task title",
        },
        {
          id: "3",
          title: "Task title",
        },
      ],
    },
  ],
};

export default function Home() {
  const { user } = useUserStore();
  const [asideOpen, setAsideOpen] = useState(true);

  if (!user || user.length === 0) {
    return <SetUserName defaultOpen={true} >
      {null}
    </SetUserName>;
  }

  return (
    <div className="flex flex-col h-screen">
      <div id="header">
        <Header />
      </div>
      <main className="flex h-screen">
        <div
          id="aside-content"
          className={cn(
            "transition-all",
            asideOpen
              ? "w-1/3 lg:w-1/4 xl:w-1/5 relative"
              : "w-[2%] bg-background"
          )}
        >
          {asideOpen && <Aside />}
          <div
            className={
              asideOpen
                ? "absolute top-6 left-[95%] z-50 bg-foreground text-background rounded-full flex items-center p-1 hover:bg-slate-700"
                : "absolute top-[5.6rem] left-[0.6%] lg:left-[0.7%] xl:left-[1%] 2xl:left-[1.2%] z-50 bg-foreground text-background rounded-full flex items-center p-1 hover:bg-slate-700"
            }
          >
            <button onClick={() => setAsideOpen(!asideOpen)}>
              {asideOpen ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div
          id="content"
          className={asideOpen ? "w-2/3 lg:w-3/4 xl:w-4/5" : "w-full"}
        >
          {/**<Board board={board} />**/}
          estas aqui, debes ir a board/id
        </div>
      </main>
    </div>
  );
}
