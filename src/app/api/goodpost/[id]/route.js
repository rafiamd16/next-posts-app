import { updateGoodPost } from "@/lib/data";

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const data = await req.json();

    if (!id)
      return Response.json(
        "ID is required",
        { status: 400 },
        { isUpdated: false }
      );

    const updatedGoodPost = await updateGoodPost(id, data);
    if (!updatedGoodPost)
      return Response.json(
        "Post not found",
        { status: 404 },
        { isUpdated: false }
      );

    return Response.json(updatedGoodPost, { status: 200 }, { isUpdated: true });
  } catch (error) {
    console.error("Error to update good post", error);
    return Response.json(
      "Failed to update good post",
      { status: 400 },
      { isUpdated: false }
    );
  }
}
