<script lang="ts">
    import "https://cdn.plot.ly/plotly-3.4.0.min.js";

    let { data = $bindable([]) }: { data: Plotly.Data[] } = $props();

    $effect(() => console.log(data))

    function action(node: HTMLElement, default_data: Plotly.Data[]) {
        // Accessing the global Plotly variable directly
        if (!window.Plotly) {
            console.error("Plotly CDN not loaded yet");
            return;
        }

        window.Plotly.newPlot(node, default_data);

        return {
            update(new_data: Plotly.Data[]) { window.Plotly.react(node, new_data); },
            destroy() { window.Plotly.purge(node); }
        };
    }
</script>

<!-- The action initializes the plot on this element -->
<div use:action={data} style="width: 100%; height: 400px;"></div>
