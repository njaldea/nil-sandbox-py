<script lang="ts">
    import { xit } from "..";
    const { signals } = xit();
    const finalize = signals("finalize");
</script>

<svelte:window
    onkeydowncapture={(event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            finalize();
            event.preventDefault();
        }
    }}
/>

<!--
@component
This component is intended to be added inside a Frame.
Once instantiated, pressing ctrl+s will finalize the Frame.
-->