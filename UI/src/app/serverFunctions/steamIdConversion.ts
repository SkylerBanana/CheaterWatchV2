"use server";
export default async function SteamIDConverter(id: string) {
  // Basically this function will return the type and id for use in the API

  const steamLegacyRegex = /^STEAM_[0-1]:([0-1]):(\d+)$/;

  //Maybe regex isnt the best way im unsure ill need to do research on the speed compared to splitting
  const steamProfileUrlRegex =
    /^https?:\/\/steamcommunity\.com\/profiles\/7656119\d{10}\/?$/;

  const steamCommunityUrlIDRegex =
    /^https?:\/\/steamcommunity\.com\/id\/[a-zA-Z0-9_-]+\/?$/;
  const steamID64Regex = /^7656119\d{10}$/;

  switch (true) {
    case steamLegacyRegex.test(id):
      return {
        type: "SteamID64",
        id: parseLegacySteamID(id),
      };
    case steamProfileUrlRegex.test(id):
      return {
        type: "SteamID64",
        id: parseProfileURL(id),
      };
    case steamCommunityUrlIDRegex.test(id):
      return {
        type: "CommunityID",
        id: parseCommunityID(id),
      };
    case steamID64Regex.test(id):
      return {
        type: "SteamID64",
        id: id,
      };
    case id.length >= 3 && id.length <= 32:
      return {
        type: "CommunityID",
        id: id,
      };
    default:
      throw new Error("Invalid format");
  }
}

// z is the account number essentially its the third part of the parse
// y is the 2nd part of the parse basically it can only be 1 or 0 i think
// v is the offset i got from the steamid docs https://developer.valvesoftware.com/wiki/SteamID
function SteamIDLegacyTo64(z: bigint, y: bigint) {
  const v = BigInt("76561197960265728");
  return (z * BigInt(2) + v + y).toString();
}

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
  const parts = CommunityID.split("/");
  //To be honest i dont feel like i need to length check this but isnt it O(1) so its not like its expensive

  if (parts.length !== 6) {
    throw new Error("Invalid Profile URL format");
  }
  return parts[4];
}
