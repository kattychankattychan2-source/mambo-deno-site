import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";

serve((req) => {
  return serveDir(req, {
    fsRoot: ".",
    showDirListing: false,
  });
}, { port: 8000 });

console.log("🦕 Mambo site running at http://localhost:8000");