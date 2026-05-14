/// <reference types="plotly.js" />
/// <reference types="vanilla-jsoneditor" />
/// <reference types="desmos" />

declare module "desmos" {
    export = Desmos;
}

interface Window {
    Plotly: typeof import('plotly.js');
}

declare const Desmos: typeof import('desmos');

declare module "https://cdn.jsdelivr.net/npm/vanilla-jsoneditor@3.12.0/standalone.min.js" {
    export { createJSONEditor } from "vanilla-jsoneditor";
}

declare module "https://cdn.plot.ly/plotly-3.4.0.min.js" {
    const Plotly: typeof import("plotly.js");
    export default Plotly;
}

declare module "https://unpkg.com/desmos@1.5.4/index.js" {
    const Desmos: typeof import("desmos");
    export default Desmos;
}

// Do NOT use 'export {}' if you want this file to stay in the global scope
// for your manual script tags.
