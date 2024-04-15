import { cn } from "@/lib/utils";

interface BoardOptionsProps {
    children: React.ReactNode;
}

function BoardOptions ({children} : BoardOptionsProps) {
    return (
        <div className={cn("invisible board-options","cursor-pointer hover:bg-slate-100 p-1 rounded-sm")}>
            {children}
        </div>
    )
}

export default BoardOptions;
