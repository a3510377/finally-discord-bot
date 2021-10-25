import axios, { AxiosRequestHeaders, Method } from "axios";
import { Http } from ".";
import Package from "@/../package.json";

export async function APIRequest(
  res: Http,
  method: Method,
  path: string | string[],
  options: { [key: string]: string | boolean | number } = {}
) {
  const client = res.client;
  const API = client.options.http.API;
  console.log(path);

  if (typeof path !== "string") path = path.join("/");
  path = !path.startsWith("/") ? `/${path}` : path;

  const url = API + path;
  let headers = {
    // @ts-ignore
    ...options.headers,
    "User-Agent": `DiscordBot (${Package.homepage}, ${client.__version__})`,
  };

  if (options.auth !== false) headers["Authorization"] = res.token();
  if (options.reason) headers["X-Audit-Log-Reason"] = String(options.reason);
  if (options.data) headers["Content-Type"] = "application/json";

  return await axios({ url, method, headers, data: options.data });
}
