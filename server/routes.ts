
// Minimal routes to satisfy build requirements - unused in static site
import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No API routes needed for static site
  return httpServer;
}
