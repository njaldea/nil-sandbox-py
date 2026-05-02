<script lang="ts" module>
    import type { FrameDetails, ReactiveFrames } from "./Helpers";
</script>

<script lang="ts" generics="const T extends readonly FrameDetails[]">
    import { onDestroy } from "svelte";
    import type { Snippet } from "svelte";

    import { xit } from "../..";

    type Props = {
        frames: T;
        loaded_data: Snippet<[ReactiveFrames<T>]>;
    };

    const { frames, loaded_data }: Props = $props();

    const { load_frame_data } = xit();

    let unmounted = false;
    const unsubs: (() => void)[] = [];
    let data = $state(frames.map((v) => ({}))) as any;
    const load = async (frame: FrameDetails, index: number) => {
        const frame_data = await load_frame_data(frame.id, frame.tag);
        if (unmounted) {
            frame_data.unsub();
            return;
        }
        unsubs.push(frame_data.unsub);
        for (const value of frame.values) {
            data[index][value.key] = frame_data.values(value.key, value.default, value.codec);
        }
    };

    onDestroy(() => {
        unmounted = true;
        unsubs.forEach((c) => c());
    });
</script>

{#if loaded_data != null}
    {#await Promise.all(frames.map(load)) then _}
        {@render loaded_data(data)}
    {/await}
{/if}
