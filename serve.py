import nil_service
import nil_xit

import os
import signal
import json
from typing import Any

def add_json_value(frame: nil_xit.UniqueFrame, id: str, value: Any):
    ref = [json.dumps(value).encode()]
    def get():
        return ref[0]
    def set(v: bytes):
        ref[0] = v
        print(json.loads(v.decode()))
    return frame.add_value(id, get, set)

def create_server(port: int, ws_only: bool):
    if ws_only:
        server = nil_service.create_ws_server("127.0.0.1", port, "/", 100 * 1024 * 1024)
        return [server, server]

    server = nil_service.create_http_server("127.0.0.1", port, 100 * 1024 * 1024)
    nil_xit.setup_server(server, [ "gui/node_modules/@nil-/xit/assets" ])
    return [server, server.use_ws("/ws")]

def serve(port: int, ws_only: bool):
    break_server_polling = False
    def sig_int(signum, frame):
        nonlocal break_server_polling
        break_server_polling = True
    signal.signal(signal.SIGINT, sig_int)

    server, ws = create_server(port, ws_only)

    @server.on_ready
    def server_ready(id: nil_service.ID):
        print(f"http://{id.to_string()}")

    xit = nil_xit.create_core(server, ws)
    # xit.set_cache_directory("/tmp/sandbox")
    xit.set_groups({ "local": "gui/local" })

    xit.add_unique_frame("index", nil_xit.FileInfo("local", "Main.svelte"))

    plotly_frame = xit.add_unique_frame("plotly", nil_xit.FileInfo("local", "Component.svelte"))
    plotly_frame.add_option("component", "$local/comp/Plotly.svelte")
    add_json_value(plotly_frame, "data", [{
        "x": ["Apples", "Bananas", "Cherries"],
        "y": [10, 15, 8],
        "type": "bar",
        "marker": { "color": 'rgb(99, 255, 132)' }
    }])
    
    json_editor_frame = xit.add_unique_frame("json_editor", nil_xit.FileInfo("local", "Component.svelte"))
    json_editor_frame.add_option("component", "$local/comp/JSONEditor.svelte")
    add_json_value(json_editor_frame, "data", [{
        "x": ["Apples", "Bananas", "Cherries"],
        "y": [10, 15, 8],
        "type": "bar",
        "marker": { "color": 'rgb(99, 255, 132)' }
    }])

    # need to poll since signal handler wont be called
    # unless thread is yielded to python
    while not break_server_polling:
        server.poll()
    xit.destroy()