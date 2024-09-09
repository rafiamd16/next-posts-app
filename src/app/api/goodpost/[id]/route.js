import { updateGoodPost } from "@/lib/data";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const data = await req.json();

    if (!id)
      return NextResponse.json(
        "ID is required",
        { status: 400 },
        { isUpdated: false }
      );

    const updatedGoodPost = await updateGoodPost(id, data);
    if (!updatedGoodPost)
      return NextResponse.json(
        "Post not found",
        { status: 404 },
        { isUpdated: false }
      );

    return NextResponse.json(
      updatedGoodPost,
      { status: 200 },
      { isUpdated: true }
    );
  } catch (error) {
    console.error("Error to update good post", error);
    return NextResponse.json(
      "Failed to update good post",
      { status: 400 },
      { isUpdated: false }
    );
  }
}
