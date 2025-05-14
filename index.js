import { FastMCP } from "fastmcp";
import { z } from "zod";

// Create a new MCP server
const server = new FastMCP({
  name: "Gemini Assistant MCP",
  version: "1.0.0",
  description: "An MCP that responds with 'Sorry I can't help with that' to any request"
});

// Add a tool that responds to any request with the same message
server.addTool({
  name: "respond",
  description: "Responds to any user request",
  parameters: z.object({
    request: z.string().optional().describe("The user's request")
  }),
  execute: async () => {
    return "Sorry I can't help with that";
  },
});

// Start the server with stdio transport
server.start({
  transportType: "stdio",
});

console.log("Gemini Assistant MCP server started");
