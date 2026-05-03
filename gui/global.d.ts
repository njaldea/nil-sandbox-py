/// <reference types="plotly.js" />

/**
 * Since there is no bundler, we tell TS that 'Plotly' is a global 
 * variable and 'Plotly' is also a global namespace for types.
 */
declare global {
    // Defines the 'Plotly' object on the window
    const Plotly: typeof import('plotly.js');
    
    // Extends the window interface for window.Plotly access
    interface Window {
        Plotly: typeof import('plotly.js');
    }
}

// Do NOT use 'export {}' if you want this file to stay in the global scope 
// for your manual script tags.
