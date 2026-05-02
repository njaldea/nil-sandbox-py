<script lang="ts">
    import { codec_string, xit } from "@nil-/xit";

    const { values } = xit();
    const text = values("text", "default_value", codec_string);
</script>

<input bind:value={$text}/>