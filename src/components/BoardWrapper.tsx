
interface BoardWrapperProps {
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

function BoardWrapper({id, children}: BoardWrapperProps) {
  return (
    <div id={id} className="board-wrapper flex flex-row justify-between items-center" onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseLeave(id)}>
        {children}
    </div>
  );
}

export default BoardWrapper