<script lang="ts">
    import { createJSONEditor } from "https://cdn.jsdelivr.net/npm/vanilla-jsoneditor@3.12.0/standalone.min.js";

    let { data = $bindable({}) }: { data: any } = $props();

    const json_editor = (target: HTMLDivElement, value: any) => {
        let is_notified_from_update = false;
        let is_notified_from_editor = false;
        const editor = createJSONEditor({
            target,
            props: {
                content: { json: value },
                onChange: (updatedContent: any) => {
                    is_notified_from_editor = true;
                    if ("json" in updatedContent)
                    {
                        if (!is_notified_from_update)
                        {
                            data = updatedContent.json;
                        }
                    }
                    else if ("text" in updatedContent)
                    {
                        try
                        {
                            if (!is_notified_from_update)
                            {
                                data = JSON.parse(updatedContent.text);
                            }
                        }
                        catch (e)
                        {
                            console.log(e);
                        }
                    }
                    is_notified_from_editor = false;
                }
            }
        });

        return {
            update: (v: any) => {
                is_notified_from_update = true;
                if (!is_notified_from_editor) {
                    editor.set({ json: v });
                }
                is_notified_from_update = false;
            },
            destroy: () => editor.destroy()
        };
    };
</script>

<!-- The action initializes the plot on this element -->
<div use:json_editor={data} style="width: 100%; height: 100%;" class="jse-theme-dark"></div>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/vanilla-jsoneditor@3.12.0/themes/jse-theme-dark.css" rel="stylesheet" type="text/css">
</svelte:head>