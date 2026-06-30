import http.server
import socketserver
import webbrowser

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

print(f"Starting server on port {PORT}...")
print("To play the game, open your browser and navigate to: http://localhost:8000")

# Automatically open the game in the default web browser
webbrowser.open(f"http://localhost:8000")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped successfully.")