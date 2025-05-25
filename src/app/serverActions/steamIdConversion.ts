"use server";
export default async function SteamIDConverter(id: string) {
  // Basically this function will convert any steamIDS into STEAMID64 so i can call the API

  const steamLegacyRegex = /^STEAM_[0-1]:([0-1]):(\d+)$/;

  //Maybe regex isnt the best way im unsure ill need to do research on the speed compared to splitting
  const steamProfileUrlRegex =
    /https?:\/\/steamcommunity\.com\/profiles\/7656119\d{10}\/?/;

  // to start im just going to Support Legacy Steamid, Steam Profile url, Steamid64 and Steam Vanity URL as i feel like those are the most useful

  if (id.match(steamLegacyRegex)) {
    return parseLegacySteamID(id);
  } else if (id.match(steamProfileUrlRegex)) {
    return parseProfileURL(id);
  }
  // Now just gotta match for the community ID and the easiest part will just be the base Steamid64 cause then i dont gotta convert :D
}

// z is the account number essentially its the third part of the parse
// y is the 2nd part of the parse basically it can only be 1 or 0 i think
// v is the offset i got from the steamid docs https://developer.valvesoftware.com/wiki/SteamID
function SteamIDLegacyTo64(z: bigint, y: bigint) {
  const v = BigInt("76561197960265728");
  return (z * BigInt(2) + v + y).toString();
}

// gonna have to do basic detection for the type of Input given and then parse with the right kind
function parseLegacySteamID(legacyID: string) {
  const parts = legacyID.split(":");
  if (parts.length !== 3) {
    throw new Error("Invalid Steam ID format");
  }
  let z = BigInt(parts[2]);
  let y = BigInt(parts[1]);
  return SteamIDLegacyTo64(z, y);
}

function parseProfileURL(profileURL: string) {
  const parts = profileURL.split("/");
  if (parts.length !== 5) {
    throw new Error("Invalid Profile URL format");
  }
  return parts[4];
}

function parseCommunityID(CommunityID: string) {
  // this one should handle if its in URL Format or if its just the standard community ID i think
}
