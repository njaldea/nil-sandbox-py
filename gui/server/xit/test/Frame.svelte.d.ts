import { type Action } from "..";
import type { Snippet } from "svelte";
type ActionItem = {
    name: string;
    action: Action<HTMLElement>;
    url: (tag: string) => string;
};
type Props = {
    selected?: number;
    load: Snippet<[
        {
            tags: string[];
            inputs: ActionItem[];
            outputs: ActionItem[];
            expects: ActionItem[];
        }
    ]>;
};
declare const Frame: import("svelte").Component<Props, {}, "selected">;
type Frame = ReturnType<typeof Frame>;
export default Frame;
