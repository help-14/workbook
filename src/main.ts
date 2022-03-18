import { ShowBrowser } from "./browser.ts";

const workerOptions = {
  type: "module",
  deno: {
    permissions: "inherit",
    namespace: true,
  },
} as WorkerOptions;
new Worker(new URL("./server.ts", import.meta.url).href, workerOptions);

ShowBrowser();
