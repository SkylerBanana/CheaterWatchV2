import prisma from "../../../lib/prisma";

// Need to grab user session
export async function AddUserInfo(userData: object, userID: any) {
  console.log(userID);
  return userData;
}
