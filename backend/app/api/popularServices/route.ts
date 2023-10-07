import connectDb from "@/db/connectDb";
import gameServices from "@/db/models/gameServices";
import { NextResponse as nr } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectDb();
    const get = await gameServices.find();
    return nr.json(get, { status: 200 });
  } catch (error) {
    return nr.json({ MSG: "Error" }, { status: 300 });
  }
};
