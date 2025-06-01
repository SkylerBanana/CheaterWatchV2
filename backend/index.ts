import initDB from "./DataBase/db";
import dotenv from "dotenv";
import { BanChecker } from "./Jobs/BanChecker";
async function Main() {
  dotenv.config();

  const DB_URL = `postgresql://${process.env.DATABASE_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DATABASE_HOST}:5433/${process.env.DATABASE_DATABASE}`;
  const clientConfig = {
    connectionString: DB_URL,
  };
  const client = await initDB(clientConfig);
  await BanChecker(client);
}
Main().catch((err) => {
  console.error("Error in Main:", err);
  process.exit(1);
});
