export async function BanChecker(client: any) {
  const result = await client.query('SELECT * FROM "User" LIMIT 5');

  console.log(result.rows);

  await client.end();
}

async function GetBans(id: string) {
  const url = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.PRIVATE_STEAM_API_KEY}&steamids=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
}
