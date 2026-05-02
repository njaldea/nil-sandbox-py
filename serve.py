import nil_service
import nil_xit

import os
import signal

def serve(port: int):
    break_server_polling = False
    def sig_int(signum, frame):
        nonlocal break_server_polling
        break_server_polling = True
    signal.signal(signal.SIGINT, sig_int)

    server = nil_service.create_http_server("127.0.0.1", port, 100 * 1024 * 1024)
    nil_xit.setup_server(server, [os.path.join(os.path.dirname(__file__), "gui/server/xit/assets")])

    @server.on_ready
    def server_ready(id: nil_service.ID):
        print(f"http://{id.to_string()}")

    xit = nil_xit.create_core(server, server.use_ws("/ws"))
    xit.set_cache_directory("/tmp/sandbox")
    xit.set_groups({ "local": "gui/local" })

    app_state = {
        "text": b""
    }
    index_frame = xit.add_unique_frame("index", "$local/Main.svelte")

    def get_text():
        nonlocal app_state
        return app_state["text"]

    def set_text(v):
        nonlocal app_state
        app_state["text"] = v
        print(f"new value received {v.decode()}")

    index_frame.add_value("text", get_text, set_text)

    # need to poll since signal handler wont be called
    # unless thread is yielded to python
    while not break_server_polling:
        server.poll()
    xit.destroy()