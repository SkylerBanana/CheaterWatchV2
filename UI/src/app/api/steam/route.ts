import { NextResponse } from "next/server";
import { z, ZodError } from "zod/v4";
import SteamIDConverter from "../../serverActions/steamIdConversion";
import { GetUserInfoCommunityID } from "./GetUserInfoCommunityID";
import { GetUserInfoID64 } from "./GetUserInfoID64";

function sanitize(input: string): string {
  // Trims whitespace i can do more stuff here if neeeded
  return input.trim().replace(/\s+/g, " ");
}

const User = z
  .object({
    id: z.string(),
  })
  .transform((v) => {
    return {
      id: sanitize(v.id),
    };
  });

export async function POST(request: Request) {
  try {
    const { steamuser } = await request.json();
    //validation goes here

    const data = User.parse(steamuser);

    const { type, id } = await SteamIDConverter(data.id);

    console.log(type, id);

    switch (type) {
      case "SteamID64":
        GetUserInfoID64(id);
        break;
      case "CommunityID":
        GetUserInfoCommunityID(id);
        break;
      default:
        console.log("Bingus Default");
    }

    return NextResponse.json({ message: "User Added" }, { status: 201 });
  } catch (err: any) {
    if (err instanceof ZodError) {
      return NextResponse.json({ errors: err.issues }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
