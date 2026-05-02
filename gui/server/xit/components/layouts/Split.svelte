<script lang="ts">
    import Container from "./Container.svelte";
    import DividerOverlay from "../utilities/DividerOverlay.svelte";

    import type { Snippet } from "svelte";

    import { create } from "../utilities/draggable.js";

    type Props = {
        min?: number;
        side_a: Snippet;
        side_b: Snippet;
        divider?: Snippet<
            [
                {
                    active: boolean;
                    alt: boolean;
                    vertical: boolean;
                }
            ]
        >;
        offset?: number;
        vertical?: boolean;
        alt?: boolean;
    };

    let {
        min = 2,
        side_a,
        side_b,
        divider,
        offset = $bindable(0),
        vertical = false,
        alt = false
    }: Props = $props();

    let active = $state(false);
    let width = $state(offset + min + 1);
    let height = $state(offset + min + 1);
    let max = $derived((vertical ? width : height) - min - 1);

    const clamped = $derived(Math.max(Math.min(offset, max), min));

    let last: number | null = null;
    const draggable = create({
        reset: () => $state.snapshot(clamped),
        move: (value) => {
            offset = value;
        },
        move_start: () => {
            active = true;
        },
        move_end: () => {
            active = false;
        },
        dbltap: () => {
            if (offset > min) {
                last = offset;
                offset = min;
            } else if (last != null) {
                offset = last;
                last = null;
            }
        },
        tap: () => {
            if (offset > min) {
                last = offset;
            }
        }
    });
</script>

<div
    class="split"
    class:vertical
    class:alt
    class:active
    class:at_limit={clamped < min || clamped > max}
    style:--nil-xit-split-value={`${clamped}px`}
    bind:clientWidth={width}
    bind:clientHeight={height}
>
    <Container>{@render side_a()}</Container>
    <div class="splitter" use:draggable={{ reversed: alt, vertical }}>
        {#if divider != null}
            {@render divider({ active, alt, vertical })}
        {:else}
            <DividerOverlay {alt} {vertical} {active}></DividerOverlay>
        {/if}
    </div>
    <Container>{@render side_b()}</Container>
</div>

<style>
    .split {
        width: 100%;
        height: 100%;
        display: grid;
        transition: 350ms;
        grid-template-columns: none;
        grid-template-rows: auto 1px var(--nil-xit-split-value);
    }

    .split.active {
        transition: 50ms;
    }

    .split.at_limit {
        transition: none;
    }

    .split.vertical {
        grid-template-columns: auto 1px var(--nil-xit-split-value);
        grid-template-rows: none;
    }

    .split.alt {
        grid-template-columns: none;
        grid-template-rows: var(--nil-xit-split-value) 1px auto;
    }

    .split.vertical.alt {
        grid-template-columns: var(--nil-xit-split-value) 1px auto;
        grid-template-rows: none;
    }

    .splitter {
        touch-action: none;
        z-index: 1;
        cursor: ns-resize;
    }

    .vertical > .splitter {
        cursor: ew-resize;
    }
</style>
