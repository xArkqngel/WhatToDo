import { cn } from "@/lib/utils";

interface BoardOptionsProps extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;

}

function BoardOptions ({children, ...rest} : BoardOptionsProps) {
    const { className } = rest

    return (
        <div className={cn("invisible board-options","cursor-pointer hover:bg-slate-100 p-1 rounded-sm", className)}>
            {children}
        </div>
    )
}

export default BoardOptions;
