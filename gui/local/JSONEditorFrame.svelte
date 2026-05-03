<script lang="ts">
    import { codec_json_from_string, xit } from "@nil-/xit";
    import JSONEditor from "$local/comp/JSONEditor.svelte";

    const { values } = xit();
    const data = values("data", [] as Plotly.Data[], codec_json_from_string);
</script>

<JSONEditor bind:data={$data}></JSONEditor>