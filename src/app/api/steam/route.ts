import { NextResponse } from "next/server";
import { z, ZodError } from "zod/v4";

function sanitize(input: string): string {
  // Trims whitespace i can do more stuff here id neeeded
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

export default async function POST(request: Request) {
  try {
    const { steamuser } = await request.json();
    //validation goes here
    const data = User.parse(steamuser);

    // Now its the hard part gotta Convert any type of steamid to steamid64
    // Also gotta deal with custom urls prob gonna have 2 seperate server actions
    // One for converting the IDs and one for dealing with urls

    // also need to cache them for 24hours in redis and refresh cache each time someone uses it

    // that way we dont gotta hit the steam API also if a user is banned i need to modify that cache with the GO microservice to keep it fresh

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
