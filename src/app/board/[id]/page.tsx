import Board from "@/components/Board";
import { useBoardsStore } from "@/utils/board";

interface PageProps {
  params: {
    id: string;
  };
}

function Page({ params }: PageProps) {

  return (
    <>
      <Board params={params} />
    </>
  );
}

export default Page;
