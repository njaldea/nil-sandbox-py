import type { FrameDetails, ReadOnlyFrames } from "./Helpers";
import type { Snippet } from "svelte";
declare function $$render<const T extends readonly FrameDetails[]>(): {
    props: {
        frames: T;
        loaded_data: Snippet<[ReadOnlyFrames<T>]>;
    };
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<const T extends readonly FrameDetails[]> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <const T extends readonly FrameDetails[]>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <const T extends readonly FrameDetails[]>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const ReadOnly: $$IsomorphicComponent;
type ReadOnly<const T extends readonly FrameDetails[]> = InstanceType<typeof ReadOnly<T>>;
export default ReadOnly;
