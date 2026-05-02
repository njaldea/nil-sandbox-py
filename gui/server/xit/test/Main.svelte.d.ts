import type { Snippet } from "svelte";
type Props = {
    children?: Snippet<[string]>;
    input?: Snippet<[{
        name: string;
        url: string;
    }]>;
    expect?: Snippet<[{
        name: string;
        url: string;
    }]>;
};
declare const Main: import("svelte").Component<Props, {}, "">;
type Main = ReturnType<typeof Main>;
export default Main;
