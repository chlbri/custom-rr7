import { data } from "react-router";
import { isServer } from "../utils.js";

export default async function load() {
  await new Promise(resolve => setTimeout(resolve, 200));
  const env = isServer ? "server" : "client";

  return data(
    { message: `About loader from ${env} loader` },
    {
      headers: { "X-Custom": "Hello" },
    },
  );
}
