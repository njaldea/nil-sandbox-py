<script lang="ts">
    import { Layout } from "@nil-/doc";
    
    import { xit, codec_json_from_string, type Action } from "@nil-/xit";

    const { load_frame_ui, values } = xit();
    let data = values("frames", {} as any, codec_json_from_string);
    let current = $state(null) as string | null;
    let frame_action = $state(null) as Action<HTMLElement> | null;
    let onnavigate = (e: { detail: string }) => {
        frame_action = null;
        current = e.detail;
        load_frame_ui($data[e.detail][0] ?? "").then(v => (frame_action = v));
    };

</script>

<Layout
    data={Object.keys($data)}
    {current}
    theme={"dark"}
    offset={200}
    panel={"bottom"}
    {onnavigate}
>
    {#snippet title()}
        <span>sample from @nil-/doc</span>
    {/snippet}
    {#if frame_action}
        <div use:frame_action></div>
    {/if}
</Layout>

<style>
    div {
        display: flex;
        width: 100%;
    }
</style>