export async function GetUserInfoCommunityID(id: string) {
  const id64 = await GetSteamID64(id);

  const url = `https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.PRIVATE_STEAM_API_KEY}&steamids=${id64}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.players[0];
  } catch (error: any) {
    console.error(error.message);
  }
}

async function GetSteamID64(id: string) {
  const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${process.env.PRIVATE_STEAM_API_KEY}&vanityurl=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json.response.steamid;
  } catch (error: any) {
    console.error(error.message);
  }
}
