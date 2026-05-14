<script lang="ts">
    import "https://unpkg.com/desmos@1.5.4/index.js";

    let { data = $bindable([]) }: { data: Desmos.ExpressionState[] } = $props();

    const bounds = { x: [], y: [] };
    const set_expressions = "True";

    const desmos = (node: HTMLElement, default_data: Desmos.ExpressionState[]) => {
        const calculator = window.Desmos.GraphingCalculator(node);

        let math_coords = calculator.graphpaperBounds.mathCoordinates;
        let bounds_init = false;

        calculator.observe("graphpaperBounds", function () {
            math_coords = calculator.graphpaperBounds.mathCoordinates;
        });

        const with_label_orientation = (expr: Desmos.ExpressionState) => ({
            ...expr,
            labelOrientation: window.Desmos.LabelOrientations.ABOVE,
        });

        const update = (data: Desmos.ExpressionState[]) => {
            if (!bounds_init) {
                calculator.setMathBounds({
                    left: bounds.x[0] ?? math_coords.left,
                    right: bounds.x[1] ?? math_coords.right,
                    bottom: bounds.y[0] ?? math_coords.bottom,
                    top: bounds.y[1] ?? math_coords.top,
                });
                bounds_init = true;
            }

            if (set_expressions) {
                data.forEach((expr) => calculator.setExpression(with_label_orientation(expr)));

                const existing = calculator.getExpressions();
                for (let i = existing.length - 1; i >= data.length; i--) {
                    const id = existing[i].id;
                    if (id != null) {
                        calculator.removeExpression({ id });
                    }
                }
            } else {
                // Using setState with a list allows folders to group graphs.
                const s: Desmos.GraphState = calculator.getState();
                s.expressions.list = data.map(with_label_orientation);
                calculator.setState(s);
            }
        };

        update(default_data);
        return {
            update,
            destroy: () => calculator.destroy(),
        };
    };
</script>

<div use:desmos={data} style="width: 100%; height: 100%;" class="jse-theme-dark"></div>