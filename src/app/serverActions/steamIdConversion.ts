"use server";
export default async function SteamIDConverter(id: string) {
  // Basically this function will convert any steamIDS into STEAMID64 so i can call the API
}

// z is the account number essentiall its the third part of the parse
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
  } else if (parts[0] != "STEAM_0" && parts[0] != "STEAM_1") {
    throw new Error("Invalid Prefix");
  }
  let z = parts[3];
  let y = parts[2];
}
