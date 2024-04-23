export type BoardType = {
    id: string;
    title: string;
    lists: ListType[];
    theme: Theme;
};

export type ListType = {
    id: string;
    title: string;
    tasks: TaskType[];
};

export type TaskType = {
    id: string;
    title: string;
};

export type Theme = 'lumiflex' | 'novatrix' | 'velustro' | 'opulento' | 'tranquiluxe'