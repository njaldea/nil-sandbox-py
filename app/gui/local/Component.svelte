<script lang="ts">
    import { codec_json_from_string, xit } from "@nil-/xit";
    import Component from "{{component}}";

    const { values } = xit();

    let data = values("data", {}, codec_json_from_string);
</script>

{#if data != null}
    <Component bind:data={$data}></Component>
{/if}