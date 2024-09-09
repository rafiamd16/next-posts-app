import { updateBadPost } from "@/lib/data";
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

    const updatedBadPost = await updateBadPost(id, data);
    if (!updatedBadPost)
      return NextResponse.json(
        "Post not found",
        { status: 404 },
        { isUpdated: false }
      );

    return Response.json(updatedBadPost, { status: 200 }, { isUpdated: true });
  } catch (error) {
    console.error("Error to update bad post", error);
    return NextResponse.json(
      "Failed to update bad post",
      { status: 400 },
      { isUpdated: false }
    );
  }
}
