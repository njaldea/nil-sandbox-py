<script lang="ts">
    import { xit, codec_string } from "@nil-/xit";
    const { signals } = xit();

    const click = signals("click", codec_string.encode);
    let message = $state("hello");
</script>

<div class="root">
    <div><input bind:value={message}><button onclick={e => click(message)} >Click Me</button></div>
    <a href={`${location.href}?frame=plotly`}>ploty frame</a>
    <a href={`${location.href}?frame=json_editor`}>json_editor</a>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
    }
</style>