import nil_service
import nil_xit

import os
import signal
import json
from typing import Any

def add_value(frame: nil_xit.UniqueFrame, id: str, value: bytes):
    ref = [value]
    def get():
        return ref[0]
    def set(v: bytes):
        ref[0] = v
    return frame.add_value(id, get, set)

def add_json_value(frame: nil_xit.UniqueFrame, id: str, value: Any):
    ref = [json.dumps(value).encode()]
    def get():
        return ref[0]
    def set(v: bytes):
        ref[0] = v
        print(json.loads(v.decode()))
    return frame.add_value(id, get, set)

def serve(port: int):
    break_server_polling = False
    def sig_int(signum, frame):
        nonlocal break_server_polling
        break_server_polling = True
    signal.signal(signal.SIGINT, sig_int)

    server = nil_service.create_http_server("127.0.0.1", port, 100 * 1024 * 1024)
    nil_xit.setup_server(server, [
        os.path.join(os.path.dirname(__file__), "gui/server/xit/assets"),
        # or take it from node_moduels/@nil-/xit/assets
    ])

    @server.on_ready
    def server_ready(id: nil_service.ID):
        print(f"http://{id.to_string()}")

    xit = nil_xit.create_core(server, server.use_ws("/ws"))
    xit.set_cache_directory("/tmp/sandbox")
    xit.set_groups({ "local": "gui/local" })

    index_frame = xit.add_unique_frame("index", "$local/Main.svelte")
    add_value(index_frame, "text", b"hello world")

    plotly_frame = xit.add_unique_frame("plotly", "$local/PlotlyFrame.svelte")
    add_json_value(plotly_frame, "data", [{
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