export type BoardType = Time & {
    id: string;
    title: string;
    lists: ListType[];
    theme: Theme;
};

type Time = {
    time: number;
}

export type ListType = Time & {
    id: string;
    title: string;
    tasks: TaskType[];
};

export type TaskType = Time & {
    id: string;
    title: string;
};
export type ThemeOptions = {
    component: JSX.Element;
    id: Theme;
};
export type Theme = 'lumiflex' | 'novatrix' | 'velustro' | 'opulento' | 'tranquiluxe' | 'none';