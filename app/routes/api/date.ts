import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

let storedDate = "";

export const loader: LoaderFunction = async () => {
  return json({ date: storedDate });
};

export const action: LoaderFunction = async ({ request }) => {
  const formData = await request.formData();
  storedDate = formData.get("date") as string;
  return json({ date: storedDate });
};