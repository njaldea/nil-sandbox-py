/// <reference types="plotly.js" />
/// <reference types="vanilla-jsoneditor" />

// Extends the window interface for window.Plotly access
interface Window {
    Plotly: typeof import('plotly.js');
}

declare module "https://cdn.jsdelivr.net/npm/vanilla-jsoneditor@3.12.0/standalone.min.js" {
    export { createJSONEditor } from "vanilla-jsoneditor";
}

// Do NOT use 'export {}' if you want this file to stay in the global scope
// for your manual script tags.
