import { Client } from "pg";

export default async function initDB(clientConfig: object) {
  try {
    const client = new Client(clientConfig);
    await client.connect();

    return client;
  } catch (err) {
    console.error(err);
  }
}
