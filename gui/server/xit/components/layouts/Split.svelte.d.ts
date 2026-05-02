import type { Snippet } from "svelte";
type Props = {
    min?: number;
    side_a: Snippet;
    side_b: Snippet;
    divider?: Snippet<[
        {
            active: boolean;
            alt: boolean;
            vertical: boolean;
        }
    ]>;
    offset?: number;
    vertical?: boolean;
    alt?: boolean;
};
declare const Split: import("svelte").Component<Props, {}, "offset">;
type Split = ReturnType<typeof Split>;
export default Split;
