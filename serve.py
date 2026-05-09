import nil_service
import nil_xit

import signal
import json

class JSONValue:
    """
    Convenience wrapper for JSON-encoded frame values.

    nil-xit itself is serialization-agnostic.
    This helper simply layers JSON encoding on top
    of the raw payload synchronization API.
    """
    def __init__(self, frame: nil_xit.UniqueFrame | nil_xit.TaggedFrame, id: str, data):
        self.data= json.dumps(data).encode()
        self.frame = frame

        def get():
            return self.data

        def set(data):
            print(f"Received data: {data.decode()}")
            self.data = data
        
        self.value = self.frame.add_value(id, get, set)

    def post(self, data):
        self.value.post(data)

def server_run(server: nil_service.Runnable):
    break_server_polling = False
    def sig_int(signum, frame):
        nonlocal break_server_polling
        break_server_polling = True
    signal.signal(signal.SIGINT, sig_int)
    
    # need to poll since signal handler wont be called
    # unless thread is yielded to python
    while not break_server_polling:
        server.poll()

def create_server(port: int, ws_only: bool):
    if ws_only:
        server = nil_service.create_ws_server("127.0.0.1", port, "/", 100 * 1024 * 1024)
        return [server, server]

    server = nil_service.create_http_server("127.0.0.1", port, 100 * 1024 * 1024)
    nil_xit.setup_server(server, [ "gui/node_modules/@nil-/xit/assets" ])
    return [server, server.use_ws("/ws")]

def create_index_frame(xit: nil_xit.Core):
    index_frame = xit.add_unique_frame("index", nil_xit.FileInfo("local", "Main.svelte"))

    def on_click(data):
        print(f"clicked: {data.decode()}")

    index_frame.add_signal("click", on_click)
    return index_frame

def create_plotly_frame(xit: nil_xit.Core):
    plotly_frame = xit.add_unique_frame("plotly", nil_xit.FileInfo("local", "Component.svelte"))
    plotly_frame.add_option("component", "$local/comp/Plotly.svelte")
    plotly_value = JSONValue(plotly_frame, "data", [{
        "x": ["Apples", "Bananas", "Cherries"],
        "y": [10, 15, 8],
        "type": "bar",
        "marker": { "color": 'rgb(99, 255, 132)' }
    }])

    return plotly_frame, plotly_value

def create_json_editor_frame(xit: nil_xit.Core):
    json_editor_frame = xit.add_unique_frame("json_editor", nil_xit.FileInfo("local", "Component.svelte"))
    json_editor_frame.add_option("component", "$local/comp/JSONEditor.svelte")
    json_editor_value = JSONValue(json_editor_frame, "data", [{
        "x": ["Apples", "Bananas", "Cherries"],
        "y": [10, 15, 8],
        "type": "bar",
        "marker": { "color": 'rgb(99, 255, 132)' }
    }])
    return json_editor_frame, json_editor_value

def serve(port: int, ws_only: bool):
    server, ws = create_server(port, ws_only)

    @server.on_ready
    def server_ready(id: nil_service.ID):
        print(f"http://{id.to_string()}")

    xit = nil_xit.create_core(server, ws)
    # xit.set_cache_directory("/tmp/sandbox")
    xit.set_groups({ "local": "gui/local" })

    index = create_index_frame(xit)
    plotly = create_plotly_frame(xit)
    json_editor = create_json_editor_frame(xit)

    server_run(server)
    xit.destroy()