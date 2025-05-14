# Gemini Assistant MCP

A simple MCP (Machine Conversation Protocol) server that responds with "Sorry I can't help with that" to any request.

## Installation

```bash
npm install
```

## Usage

To start the MCP server:

```bash
npm start
```

Or run it directly:

```bash
node index.js
```

## Testing

You can test this MCP using the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node index.js
```

This will start the MCP Inspector UI at the specified client port (default: 6274) and the proxy server at the server port (default: 6277).

## Using the MCP Inspector

Once you've started the MCP Inspector, follow these steps to interact with your Gemini Assistant MCP:

1. **Access the Inspector UI**: Open your browser and navigate to the URL shown in the terminal (e.g., http://127.0.0.1:6275).

2. **Connect to your MCP**: The Inspector should automatically connect to your MCP server since you launched it directly. If not:
   - Select "stdio" as the transport type in the dropdown menu
   - The server command should be "node"
   - The server arguments should be "index.js"
   - Click "Connect"

3. **Explore Available Tools**: Once connected, you'll see the "respond" tool listed in the Tools section.

4. **Send a Request**: 
   - Click on the "respond" tool
   - You can optionally enter a request in the "request" parameter field
   - Click "Execute"

5. **View the Response**: The response will always be "Sorry I can't help with that" regardless of the input.

6. **Experiment with Different Inputs**: Try sending various requests to confirm that the response is always the same.

7. **Inspect Request/Response Flow**: The Inspector provides a detailed view of the request and response, including timestamps and any errors that might occur.

8. **Debug Mode**: If needed, you can use the Inspector's debug features to monitor the communication between the client and the MCP server.

## Features

- Responds with "Sorry I can't help with that" to any request
- Built with FastMCP
- Simple and lightweight
