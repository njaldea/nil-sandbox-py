<script lang="ts">
    import { codec_json_from_string, xit } from "@nil-/xit";
    import type { Writable } from "svelte/store"
    import Component from "{{component}}";

    const { load_frame_data } = xit();

    let data = $state(null) as Writable<any> | null;
    load_frame_data("data")
        .then(f => (data = f.values("data", {}, codec_json_from_string)));
</script>

{#if data != null}
    <Component bind:data={$data}></Component>
{/if}