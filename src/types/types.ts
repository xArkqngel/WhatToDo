export type BoardType = {
    id: string;
    title: string;
    lists: ListType[];
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