#!/usr/bin/env python3
"""Local test server that mimics the vercel.json routing for TAURUS EDITIONS 2026."""
import http.server, os, json, socketserver, importlib.util

BASE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(BASE, "public")
API = os.path.join(BASE, "api")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC, **kwargs)

    def log_message(self, format, *args):
        pass

    def send_json(self, status, data):
        body = json.dumps(data).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path = self.path.split('?', 1)[0]

        if path == "/api/campaigns":
            campaigns = []
            camp_dir = os.path.join(PUBLIC, "campaigns")
            if os.path.exists(camp_dir):
                for cid in sorted(os.listdir(camp_dir)):
                    mp = os.path.join(camp_dir, cid, "metadata.json")
                    if os.path.exists(mp):
                        try:
                            with open(mp) as f:
                                campaigns.append(json.load(f))
                        except Exception as e:
                            print(f"warn: bad metadata {mp}: {e}")
            self.send_json(200, {"campaigns": campaigns})
            return

        if path == "/api/omni/brief":
            self.send_json(200, {"action": "omni_brief", "status": "placeholder", "note": "Replace with real campaign pipeline handler before production deploy."})
            return

        # Static fallback via directory handler
        if path == "/":
            self.path = "/index.html"
        return super().do_GET()

PORT = 8792
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
