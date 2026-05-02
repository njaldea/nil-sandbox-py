type Parameter = {
    vertical: boolean;
    reversed: boolean;
};
type Options = {
    reset?: () => number;
    move?: (value: number) => void;
    move_start?: () => void;
    move_end?: () => void;
    dbltap?: () => void;
    tap?: () => void;
};
export declare const create: ({ move, move_start, move_end, reset, dbltap, tap }: Options) => (div: HTMLElement, param: Parameter) => {
    update: (new_params: Parameter) => Parameter;
    destroy: () => void;
};
export {};
