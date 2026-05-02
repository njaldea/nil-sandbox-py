<script lang="ts">
    import { codec_string, xit, type Action } from "..";
    import { derived, get } from "svelte/store";

    import type { Snippet } from "svelte";

    type ActionItem = {
        name: string;
        action: Action<HTMLElement>;
        url: (tag: string) => string;
    };

    type Props = {
        selected?: number;
        load: Snippet<
            [
                {
                    tags: string[];
                    inputs: ActionItem[];
                    outputs: ActionItem[];
                    expects: ActionItem[];
                }
            ]
        >;
    };

    let { selected = $bindable(-1), load }: Props = $props();

    let { signals, values, load_frame_data, load_frame_ui } = xit();

    const frame_info = async (tag: string) => {
        const { values, unsub } = await load_frame_data("frame_info", tag);
        const load = async (key: string) => {
            const v = values(key, "", codec_string);
            return Promise.all(
                get(v)
                    .split(",")
                    .map((v) => {
                        const [frame_id, mark, g] = v.split(":");
                        if (g !== "V") {
                            return;
                        }
                        if (mark === "T") {
                            return load_frame_ui(frame_id, tag).then((f) => {
                                return {
                                    name: frame_id,
                                    action: f,
                                    url: (tag) => `/?frame=${frame_id}&tag=${tag}`
                                } satisfies ActionItem;
                            });
                        } else if (mark === "U") {
                            return load_frame_ui(frame_id).then((f) => {
                                return {
                                    name: frame_id,
                                    action: f,
                                    url: (tag) => `/?frame=${frame_id}`
                                } satisfies ActionItem;
                            });
                        }
                    })
                    .filter((v) => v != null)
            );
        };
        const [inputs, outputs, expects] = await Promise.all([load("inputs"), load("outputs"), load("expects")]);
        unsub();
        return { inputs, outputs, expects };
    };

    const tags_str = values("tags", "", codec_string);
    const tags = derived(tags_str, v => v.split(','));

    if ($tags.length > 0) {
        selected = 0;
    }

    const finalize = signals("finalize", codec_string.encode);

    let a_inputs = $state([] as ActionItem[]);
    let a_outputs = $state([] as ActionItem[]);
    let a_expects = $state([] as ActionItem[]);
    let title = $derived(selected > $tags.length ? "" : $tags[selected]);
    const update = async (v: number) => {
        a_inputs = [];
        a_outputs = [];
        a_expects = [];
        const t = $tags;
        if (0 <= v && v < t.length) {
            const { inputs, outputs, expects } = await frame_info(t[v]);
            a_inputs = inputs;
            a_outputs = outputs;
            a_expects = expects
        }
    };

    $effect(() => {
        update(selected);
    });
</script>

<svelte:head>
    <title>nil - xit {title}</title>
</svelte:head>

<svelte:window
    onkeydowncapture={(event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "s") {
            if (0 <= selected && selected < $tags.length) {
                finalize($tags[selected]);
                event.preventDefault();
            }
        }
    }}
/>

{@render load({ tags: $tags.sort(), inputs: a_inputs, outputs: a_outputs, expects: a_expects })}
