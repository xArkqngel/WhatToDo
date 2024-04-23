import { cn } from "@/lib/utils";

interface BoardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    id : string;
    children: React.ReactNode;
}

const handleMouseEnter = (id:string) => {
    const target = document.getElementById(id);
    const options = target?.getElementsByClassName("board-options");
    
    for(const option of options as any) {
        option.classList.remove("invisible");
    }
}

const handleMouseLeave = (id:string) => {
    const target = document.getElementById(id);
    const options = target?.getElementsByClassName("board-options");
    
    for(const option of options as any) {
        option.classList.add("invisible");
    }
}

function BoardWrapper({id, children, ...rest}: BoardWrapperProps) {
    const { className } = rest;
  return (
    <div id={id} className={cn("board-wrapper flex flex-row justify-between items-center", className)} onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseLeave(id)}>
        {children}
    </div>
  );
}

export default BoardWrapper