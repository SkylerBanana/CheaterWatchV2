export async function GetUserInfoID64(id: string) {
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
