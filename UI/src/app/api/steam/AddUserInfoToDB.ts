import prisma from "../../../lib/prisma";

export async function AddUserInfo(userData: any, userID: any) {
  try {
    await prisma.userTracked.create({
      data: {
        user: { connect: { id: userID } },
        trackedUser: {
          connectOrCreate: {
            where: { steamid: userData.SteamId },
            create: {
              steamid: userData.SteamId,
              vacbans: userData.NumberOfVACBans,
              gamebans: userData.NumberOfGameBans,
            },
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
}
