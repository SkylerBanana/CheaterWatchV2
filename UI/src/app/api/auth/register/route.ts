import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword, username } = await request.json();
    // ima do validation in here

    // Added basic validation gonna use Zod later to do more Indepth validation
    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords Dont Match" },
        { status: 400 }
      );
    }
    if (password.length < 9) {
      return NextResponse.json(
        { message: "Password Length To Short" },
        { status: 400 }
      );
    }

    if (username.length < 3) {
      return NextResponse.json(
        { message: "Username Length To Short" },
        { status: 400 }
      );
    }
    const hashedPassword = await hash(password, 11);
    //Another for Username ill prob just try to insert the Data and if a user already exists then dont allow it

    //That should be O(1) instead of checking the database for a username that matches which should be O(N)

    // Wanna add cloudflare Captcha

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        hashed_password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (e: any) {
    if (e.code === "P2002") {
      return NextResponse.json(
        {
          message: `A user with that ${e.meta.target} already exists`,
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
