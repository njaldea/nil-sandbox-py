<script lang="ts">
    type Props = { vertical: boolean; alt: boolean; active: boolean };
    let { vertical, alt, active }: Props = $props();

    const title = $derived(
        `Collapse ${vertical ? (alt ? "left" : "right") : alt ? "top" : "bottom"}`
    );
</script>

<div
    class="parent"
    class:primary={!alt}
    class:secondary={alt}
    class:active
    class:vertical
    class:horizontal={!vertical}
>
    <div {title}></div>
</div>

<style>
    .parent {
        user-select: none;
        width: 100%;
        height: 100%;
        transform: translateY(-1px);

        transition:
            border-color 350ms,
            background-color 350ms;
        background-color: hsl(0, 2%, 40%);
    }

    .parent.vertical {
        transform: translateX(-1px);
    }

    .parent > div {
        touch-action: none;
        cursor: ns-resize;
        width: 100%;
        height: calc(100% + 20px);
        transform: translateY(-10px);
    }

    .parent.vertical > div {
        cursor: ew-resize;
        height: 100%;
        width: calc(100% + 20px);
        transform: translateX(-10px);
    }

    /* borders */

    .parent.horizontal {
        border-bottom: hsl(0, 2%, 40%) solid 1px;
        border-top: hsl(0, 2%, 40%) solid 1px;
    }

    .parent.vertical {
        border-left: hsl(0, 2%, 40%) solid 1px;
        border-right: hsl(0, 2%, 40%) solid 1px;
    }

    .parent.primary.horizontal:hover,
    .parent.primary.horizontal.active {
        border-bottom: hsl(0, 0%, 100%) solid 1px;
    }

    .parent.secondary.horizontal:hover,
    .parent.secondary.horizontal.active {
        border-top: hsl(0, 0%, 100%) solid 1px;
    }

    .parent.primary.vertical:hover,
    .parent.primary.vertical.active {
        border-right: hsl(0, 0%, 100%) solid 1px;
    }

    .parent.secondary.vertical:hover,
    .parent.secondary.vertical.active {
        border-left: hsl(0, 0%, 100%) solid 1px;
    }
</style>
