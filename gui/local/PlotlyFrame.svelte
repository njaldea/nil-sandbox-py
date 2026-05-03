<script lang="ts">
    import { codec_json_from_string, xit } from "@nil-/xit";
    import Plotly from "$local/comp/Plotly.svelte";

    const { values } = xit();
    const data = values("data", JSON.parse(`[{
        "x": ["Apples", "Bananas", "Cherries"],
        "y": [10, 15, 8],
        "type": "bar",
        "marker": { "color": "rgb(255, 99, 132)" }
    }]`) as Plotly.Data[], codec_json_from_string);
</script>

<Plotly data={$data}></Plotly>