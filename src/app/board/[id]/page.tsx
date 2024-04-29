import Board from "@/components/Board";
import { BoardType, Theme } from "@/types/types";


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

interface PageProps {
  boards: BoardType[];
  params: {
    id: string;
  };
}

function Page({ boards, params }: PageProps) {
  return (
    <>
        <p>{params.id}</p>

    </>
  );
}

export default Page;