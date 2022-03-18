import { Webview } from "https://deno.land/x/webview@0.7.0-pre.1/mod.ts";

export async function ShowBrowser(): Promise<void> {
  const webview = new Webview();
  webview.title = "Deno Webview";
  webview.navigate("http://localhost:1410/");

  await webview.run();
  self.close();
}
