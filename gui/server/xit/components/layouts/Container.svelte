<script lang="ts">
    import type { Snippet } from "svelte";
    let { children }: { children: Snippet } = $props();
</script>

<div class="container">
    <div>
        {@render children?.()}
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .container > div {
        inset: 0;
        position: absolute;
    }
</style>
