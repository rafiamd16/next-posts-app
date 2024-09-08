import { updateBadPost } from "@/lib/data";

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

    const updatedBadPost = await updateBadPost(id, data);
    if (!updatedBadPost)
      return Response.json(
        "Post not found",
        { status: 404 },
        { isUpdated: false }
      );

    return Response.json(updatedBadPost, { status: 200 }, { isUpdated: true });
  } catch (error) {
    console.error("Error to update bad post", error);
    return Response.json(
      "Failed to update bad post",
      { status: 400 },
      { isUpdated: false }
    );
  }
}
